import { type APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'
import type { Provider } from '@supabase/supabase-js'

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const { provider } = await request.json()

    const validateProvider = ['github', 'google', 'facebook']

    if (!validateProvider.includes(provider)) return new Response('Invalid Provider', { status: 400 })

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: 'http://localhost:4321/api/auth/callback'
      }
    })

    if (error != null) return new Response(error.message, { status: 400 })

    const response = new Response(JSON.stringify(data), { status: 200 })
    return response
  } catch (error) {
    return new Response('Server error', { status: 500 })
  }
}
