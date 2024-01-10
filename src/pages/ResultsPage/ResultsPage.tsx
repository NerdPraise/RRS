import { useRef, useState } from 'react'

import { Card } from '@Components'
import { DATA } from './constants'

import style from './ResultsPage.module.css'

interface ArticleType {
  id: number
  title: string
  body: string
  author: string
}

export const ResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [articles, _] = useState<ArticleType[]>(DATA)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredArticles = articles.filter(
    item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const updateSearchTerm = () => {
    setSearchTerm(inputRef.current?.value as string)
  }

  return (
    <div className={style.ResultsPage}>
      <div className={style.input__group}>
        <input
          placeholder="Search by author or title"
          ref={inputRef}
          type="text"
        />
        <button onClick={updateSearchTerm}>Search</button>
      </div>
      <div className={style.results__card__container}>
        {filteredArticles.map(item => (
          <Card
            key={item.id}
            classname={style.result__card}
            headerContent={item.title}>
            {item.body}
            <div className={style.author}>Author: {item.author}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}
