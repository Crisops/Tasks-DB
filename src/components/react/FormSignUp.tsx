import ButtonProviderLogin from './ButtonProviderLogin'
import { Facebook, GitHub, Google } from './Icons'
import Input from './Input'

function FormSignUp (): JSX.Element {
  return (
    <div className='absolute top-0 right-0 w-1/2 h-full flex justify-center'>
      <form className='w-96 h-full flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center gap-y-4'>
          <h1 className='text-4xl font-bold text-center'>Create account</h1>
          <div className='flex gap-x-6'>
            <ButtonProviderLogin name='provider' provider='github' ProviderLogin={GitHub} />
            <ButtonProviderLogin name='provider' provider='google' ProviderLogin={Google} />
            <ButtonProviderLogin name='provider' provider='facebook' ProviderLogin={Facebook} />
          </div>
          <div>
            <span className='text-zinc-400 text-sm'>or use your email and password</span>
          </div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <Input type='text' name='username' placeholder='Username' />
          <Input type='email' name='email' placeholder='Email' />
          <Input type='password' name='password' placeholder='Password' />
          <button className='px-2 py-3 bg-zinc-300 font-semibold transition-colors duration-300 ease-in-out hover:bg-[#FF0050] hover:text-white'>Sign Up</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-3 mt-4'>
          <div className='w-full flex justify-between items-center'>
            <span>Already have an account?</span>
            <button className='text-pink-600'>Sign in</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormSignUp
