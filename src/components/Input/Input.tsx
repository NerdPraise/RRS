import ClassNames from 'classnames'
import { ChangeEvent, useRef } from 'react'

import style from './Input.module.css'

enum Error_By_Type {
  email = 'Email provided is not valid',
  tel = 'Phone number format is incorrect',
  text = 'Field data is incorrect or unexpected',
}

interface InputProps {
  type: keyof typeof Error_By_Type
  name: string
  onChange?: (e: string) => void
  setError: React.Dispatch<
    React.SetStateAction<{
      [key: string]: string
    }>
  >
  error: { [key: string]: string }
  classname?: string
}

export const Input = ({
  type,
  name,
  onChange,
  error,
  setError,
  classname,
}: InputProps) => {
  const inputRef = useRef(null)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const isValid = runValidation(value)

    isValid && onChange?.(value)
  }

  const runValidation = (value: string) => {
    if (!value) {
      setError((prevState: typeof error) => ({
        ...prevState,
        [name]: `${name.replace('_', ' ')} can't be empty`,
      }))
      return false
    }

    const isValid =
      (type === 'email' &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ||
      (type === 'tel' && /^[0]{1}[7-9]{1}[0-1]{1}[0-9]{8}$/.test(value)) ||
      (type === 'text' && /.*/.test(value))

    setError(
      value && !isValid
        ? prevState => ({ ...prevState, [name]: Error_By_Type[type] })
        : {},
    )
    return isValid
  }

  return (
    <div className={ClassNames(classname, style.Input)}>
      <input
        ref={inputRef}
        name={name}
        onChange={onInputChange}
        type={type}
        data-testid={name}
      />
      {error?.[name] && <div className={style.error}>{error[name]}</div>}
    </div>
  )
}
