import type { FormEvent } from 'react'

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

  await fetch('/api/auth/signup', options)
}
