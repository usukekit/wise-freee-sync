import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const token = cookies().get('freee_token')?.value
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = await fetch('https://api.freee.co.jp/api/1/companies', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    const error = await res.text()
    return NextResponse.json({ error }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
