import ClassNames from 'classnames'

import style from './Card.module.css'

interface CardProps {
  classname?: string
  headerContent?: React.ReactNode
  children: React.ReactNode
}

export const Card = ({ classname, headerContent, children }: CardProps) => {
  return (
    <div className={ClassNames(style.Card, classname)}>
      {headerContent && (
        <div className={style.card__header}>{headerContent}</div>
      )}
      <div className={style.card__body}> {children}</div>
    </div>
  )
}
