import type { MouseEvent } from 'react'
import type React from 'react'

interface ProviderComponentProps {
  signInProvider: (e: MouseEvent<HTMLButtonElement>) => Promise<void>
  ProviderLogin: React.ComponentType
  provider: string
}

function ButtonProviderLogin ({ signInProvider, provider, ProviderLogin }: ProviderComponentProps): JSX.Element {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    signInProvider(e).catch(err => console.log(err))
  }

  return (
    <button onClick={handleClick} className='group flex justify-center items-center size-14 bg-zinc-200/50 rounded-full shadow-[0px_1px_10px] shadow-zinc-600/30 transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-300' name={provider} value={provider}><ProviderLogin /></button>
  )
}

export default ButtonProviderLogin
