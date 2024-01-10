import React from 'react'

import { ResultsPage } from '@Pages/ResultsPage'
import { CreationPage } from '@Pages/Article/CreationPage'

const ROUTES = [
  {
    path: '/article',
    element: <CreationPage />,
  },
  {
    path: '/results',
    element: <ResultsPage />,
  },
]

export default ROUTES
