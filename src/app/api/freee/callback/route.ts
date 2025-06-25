import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code' }, { status: 400 })
  }

  const clientId = process.env.FREEE_CLIENT_ID
  const clientSecret = process.env.FREEE_CLIENT_SECRET
  const redirectUri = process.env.FREEE_REDIRECT_URI

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: 'Missing freee API credentials' },
      { status: 500 }
    )
  }

  const tokenRes = await fetch(
    'https://accounts.secure.freee.co.jp/public_api/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri
      }).toString()
    }
  )

  if (!tokenRes.ok) {
    const error = await tokenRes.text()
    return NextResponse.json({ error }, { status: tokenRes.status })
  }

  const data = await tokenRes.json()
  const response = NextResponse.json(data)

  if (data.access_token) {
    response.cookies.set('freee_token', data.access_token, {
      httpOnly: true,
      path: '/'
    })
  }

  return response
}
