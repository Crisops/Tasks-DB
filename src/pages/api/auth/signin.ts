import { type APIRoute } from 'astro'

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // const formData = await request.formData()

    // const provider = formData.get('provider')?.toString()

    const { provider, email, password } = await request.json()

    console.log(provider, email, password)

    // redirect('/dashboard')

    return new Response('Tenemos que redireccionar', { status: 200 })
    // const provider = formData.get('provider')

    // const validateProvider = ['github', 'google', 'facebook']
  } catch (error) {
    return new Response('Server error', { status: 500 })
  }
}
