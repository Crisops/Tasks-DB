
interface Props {
  walkForm: boolean
}

function TextWalkFormTitle ({ walkForm }: Props): JSX.Element {
  return (
    <h2
      className={`absolute text-white font-bold text-6xl ${walkForm ? 'animate-fade-left animate-duration-700 animate-delay-200 animate-ease-in animate-normal' : 'animate-fade-right animate-duration-700 animate-delay-200 animate-ease-in animate-normal'}`}
    >
      {walkForm ? 'Welcome, Back!' : 'Hello, Friend!'}
    </h2>
  )
}

export default TextWalkFormTitle
