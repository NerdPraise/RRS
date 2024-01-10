import { useEffect, useState } from 'react'
import ClassNames from 'classnames'

import { Portal } from '../Portal'

import style from './Toast.module.css'

interface ToastProps {
  message: string | undefined
  level: 'alert' | 'success' | 'error'
  onClear?: VoidFunction
}
export const Toast = ({ message, level, onClear }: ToastProps) => {
  const [ownMessage, setOwnMessage] = useState(message)

  useEffect(() => {
    setOwnMessage(message)
  }, [message])

  useEffect(() => {
    const interval = setInterval(deleteToast, 3000)
    return () => clearInterval(interval)
  }, [ownMessage])

  const deleteToast = () => {
    setOwnMessage('')
    onClear?.()
  }

  return (
    <Portal>
      {!!ownMessage && (
        <div className={style.Toast}>
          <div className={ClassNames(style.toast, level)}>
            <div className={style.toast_message}>{message}</div>
            <div className={style.cancel_btn} onClick={deleteToast}>
              X
            </div>
          </div>
        </div>
      )}
    </Portal>
  )
}
