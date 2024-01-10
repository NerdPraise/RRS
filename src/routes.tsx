import React from 'react'
import { Link } from 'react-router-dom'

import { ResultsPage } from '@Pages/ResultsPage'
import { CreationPage } from '@Pages/Article/CreationPage'

const ROUTES = [
  {
    path: '/',
    element: (
      <div>
        Welcome, <Link to="/results">Results</Link> or{' '}
        <Link to="/article">Articles</Link>{' '}
      </div>
    ),
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
  {
    path: '/article',
    element: <CreationPage />,
  },
]

export default ROUTES
