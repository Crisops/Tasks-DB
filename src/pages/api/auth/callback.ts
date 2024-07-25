import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const codeAuth = url.searchParams.get('code')

  if (codeAuth === null) return new Response('No code', { status: 400 })

  const { data, error } = await supabase.auth.exchangeCodeForSession(codeAuth)

  if (error != null) return new Response(error.message, { status: 400 })

  const { access_token: accessToken, refresh_token: refreshToken } = data.session

  cookies.set('access_token', accessToken, { path: '/' })
  cookies.set('refresh_token', refreshToken, { path: '/' })

  return redirect('/dashboard')
}
