import type React from 'react'

interface ProviderComponentProps {
  signInProvider: (provider: string) => void
  ProviderLogin: React.ComponentType
  provider: string
}

function ButtonProviderLogin ({ signInProvider, provider, ProviderLogin }: ProviderComponentProps): JSX.Element {
  return (
    <button onClick={() => signInProvider(provider)} className='group flex justify-center items-center size-14 bg-zinc-200/50 rounded-full shadow-[0px_1px_10px] shadow-zinc-600/30 transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-300'><ProviderLogin /></button>
  )
}

export default ButtonProviderLogin
