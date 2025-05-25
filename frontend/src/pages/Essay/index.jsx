import React from 'react'
import { useParams } from 'react-router-dom'
import ESSAYS_DATA from '../../constants/ESSAYS_DATA'
import Card from '../../components/Card'

const Essay = () => {
  const { slug } = useParams()
  const {content} = ESSAYS_DATA.find(essay => essay.slug === slug)

  if (!content) {
    return <Card>Essay not found</Card>
  }

  return (
    <Card>
      {content}
    </Card>
  )
}

export default Essay
