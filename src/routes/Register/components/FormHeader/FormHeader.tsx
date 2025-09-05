import type { FC } from 'react'

interface FormHeaderProps {
  title: string
  section: string
}

const FormHeader: FC<FormHeaderProps> = ({ title, section }) => {
  return (
    <>
      <div className="mb-5  text-4xl font-bold sm:text-5xl">
        {title}
      </div>
      <div className=" text-xl font-bold sm:text-2xl">
        {section}
      </div>
    </>
  )
}

export default FormHeader
