
import type { FormEvent } from 'react'
import { useFormStore } from '../store/useFormStore'
import ButtonProviderLogin from './ButtonProviderLogin'
import { Facebook, GitHub, Google } from './Icons'
import Input from './Input'
import { handleSubmit, handleSignInProvider } from '../../helpers/fetchSignIn'

function FormSignIn (): JSX.Element {
  const { setWalkForm } = useFormStore(state => state)

  const handleSignUp = (): void => {
    setWalkForm(true)
  }

  const SignIn = (e: FormEvent<HTMLFormElement>): void => {
    handleSubmit(e).catch(err => console.log(err))
  }

  return (
    <div className='absolute top-0 left-0 w-1/2 h-full flex justify-center'>
      <form onSubmit={SignIn} className='w-96 h-full flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center gap-y-4'>
          <h1 className='text-4xl font-bold text-center'>Sign in</h1>
          <div className='flex gap-x-6'>
            <ButtonProviderLogin signInProvider={handleSignInProvider} provider='github' ProviderLogin={GitHub} />
            <ButtonProviderLogin signInProvider={handleSignInProvider} provider='google' ProviderLogin={Google} />
            <ButtonProviderLogin signInProvider={handleSignInProvider} provider='facebook' ProviderLogin={Facebook} />
          </div>
          <div>
            <span className='text-zinc-400 text-sm'>or use your account</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <Input type='text' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <span className='self-end hover:underline cursor-pointer'>Forgot password?</span>
          <button className='px-2 py-3 bg-zinc-300 font-semibold transition-colors duration-300 ease-in-out hover:bg-[#FF0050] hover:text-white'>Login</button>
        </div>
        <div className='w-full mt-4 flex justify-between items-center'>
          <span>Don't have an account?</span>
          <span onClick={handleSignUp} className='text-pink-600 cursor-pointer'>Sign Up</span>
        </div>
      </form>
    </div>
  )
}

export default FormSignIn
