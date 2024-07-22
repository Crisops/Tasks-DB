
interface IntutForm {
  type: string
  name: string
  placeholder: string
}

function Input ({ type, name, placeholder }: IntutForm): JSX.Element {
  return (
    <input type={type} placeholder={placeholder} name={name} className='outline-none px-1 py-2 border-b border-zinc-300' />
  )
}

export default Input
