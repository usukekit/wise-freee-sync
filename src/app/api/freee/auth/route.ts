import { NextResponse } from 'next/server'

export async function GET() {
  const clientId = process.env.FREEE_CLIENT_ID
  const redirectUri = process.env.FREEE_REDIRECT_URI

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: 'Missing FREEE_CLIENT_ID or FREEE_REDIRECT_URI' },
      { status: 500 }
    )
  }

  const authorizeUrl = new URL(
    'https://accounts.secure.freee.co.jp/public_api/authorize'
  )
  authorizeUrl.searchParams.set('response_type', 'code')
  authorizeUrl.searchParams.set('client_id', clientId)
  authorizeUrl.searchParams.set('redirect_uri', redirectUri)
  authorizeUrl.searchParams.set('scope', 'read write')
  authorizeUrl.searchParams.set('state', crypto.randomUUID())

  return NextResponse.redirect(authorizeUrl.toString())
}
