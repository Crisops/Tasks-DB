import type { FormEvent } from 'react'

export const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))

  const options: RequestInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch('/api/auth/signin', options)

    if (!response.ok) throw new Error('Failed to sign in')
    const { url } = await response.json()

    window.location.href = url
  } catch (error) {
    console.log(error)
  }
}
