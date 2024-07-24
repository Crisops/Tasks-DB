
interface WalkFormParagraph {
  walkForm: boolean
}

function TextWalkFormParagraph ({ walkForm }: WalkFormParagraph): JSX.Element {
  return (
    <p
      className={`absolute text-white font-normal text-center ${walkForm ? 'animate-fade-left animate-duration-700 animate-delay-200 animate-ease-in animate-normal' : 'animate-fade-right animate-duration-700 animate-delay-200 animate-ease-in animate-normal'}`}
    >
      {walkForm ? 'To keep connected with us please login with your personal info' : 'Enter your personal details and start journey with us'}
    </p>
  )
}

export default TextWalkFormParagraph
