import type { FormEvent, MouseEvent } from 'react'

export const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  await fetch('/api/auth/signin', options)
}

export const handleSignInProvider = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
  const value = (e.target as HTMLButtonElement).value

  const data = {
    provider: value
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  await fetch('/api/auth/signin', options)
}
