import type React from 'react'

interface ProviderComponentProps {
  ProviderLogin: React.ComponentType
  name: string
  provider: string
}
function ButtonProviderLogin ({ name, provider, ProviderLogin }: ProviderComponentProps): JSX.Element {
  return (
    <button className='group flex justify-center items-center size-14 bg-zinc-200/50 rounded-full shadow-[0px_1px_10px] shadow-zinc-600/30 transition-shadow duration-300 hover:shadow-md hover:shadow-zinc-300' name={name} value={provider} type='submit'><ProviderLogin /></button>
  )
}

export default ButtonProviderLogin
