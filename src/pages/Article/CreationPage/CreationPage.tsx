import { FormEvent, useRef, useState } from 'react'
import { Input, Toast } from '@Components'

import { uploadArticle } from './actions'

import style from './CreationPage.module.css'

export const CreationPage = () => {
  const [formError, setFormError] = useState<{ [key: string]: string }>({})
  const [statusMessage, setStatusMessage] = useState<{
    message?: string
    level?: string
  }>()
  const formRef = useRef(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setStatusMessage({})
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    uploadArticle(data)
      .then(res => res.json())
      .then(_ => {
        form.reset()
        setStatusMessage({ message: 'Successful request', level: 'success' })
      })
      .catch(err => setStatusMessage({ message: err.message, level: 'error' }))
  }

  const shouldDisable = !!Object.keys(formError).length

  return (
    <div className={style.CreationPage}>
      <Toast
        message={statusMessage?.message}
        level={statusMessage?.level as 'error' | 'success'}
      />
      <div className={style.container}>
        <h2 className={style.header}>Article Page</h2>
        <div className={style.tag}>Create your new articles</div>
        <div className="form">
          <form ref={formRef} onSubmit={handleSubmit} role="form">
            <div className={style.name__group}>
              <div className="input__group half">
                <label htmlFor="first_name ">First name</label>
                <Input
                  type="text"
                  name="first_name"
                  error={formError}
                  setError={setFormError}
                  classname={style.input__cont}
                />
              </div>
              <div className="input__group half">
                <label htmlFor="last_name ">Last name</label>
                <Input
                  type="text"
                  name="last_name"
                  error={formError}
                  setError={setFormError}
                  classname={style.input__cont}
                />
              </div>
            </div>
            <div className="input__group">
              <label htmlFor="phone">Phone</label>
              <Input
                type="tel"
                name="phone"
                error={formError}
                setError={setFormError}
                classname={style.input__cont}
              />
            </div>
            <div className="input__group">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                error={formError}
                setError={setFormError}
                classname={style.input__cont}
              />
            </div>
            <div className="input__group">
              <label htmlFor="address">Address</label>
              <Input
                type="text"
                name="address"
                error={formError}
                setError={setFormError}
                classname={style.input__cont}
              />
            </div>
            <div className="input__group">
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                rows={12}
                cols={60}
                required
                role="textbox"
              />
            </div>
            <button disabled={shouldDisable} data-testid="textarea">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
