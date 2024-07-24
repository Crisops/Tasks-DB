import { useFormStore } from '../store/useFormStore'
import TextWalkFormParagraph from './TextWalkFormParagraph'
import TextWalkFormTitle from './TextWalkFormTitle'

function WalkForm (): JSX.Element {
  const { walkForm } = useFormStore(state => state)

  return (
    <div className={`absolute w-1/2 h-full transition-transform duration-700 ${walkForm ? 'translate-x-0' : 'translate-x-full'}  bg-[linear-gradient(45deg,_rgb(255,0,51),_rgba(255,0,102))] z-[1]`}>
      <div className='relative h-full flex flex-col gap-y-3 justify-center items-center'>
        <div className='relative flex justify-center items-center w-full h-16'>
          <TextWalkFormTitle walkForm={walkForm} />
        </div>
        <div className='relative w-full h-12 max-w-xs flex justify-center items-center'>
          <TextWalkFormParagraph walkForm={walkForm} />
        </div>
      </div>
    </div>

  )
}

export default WalkForm
