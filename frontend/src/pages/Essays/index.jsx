import React from 'react'
import { Link } from 'react-router-dom'

import ESSAYS_DATA from '../../constants/ESSAYS_DATA'
import Card from '../../components/Card'
import Divider from '../../components/Divider'

const Essays = () => {
    return (
        <Card>
          <div className="text-2xl font-bold">My Essays</div>
          <div className="text-md">
            Essays I've written over time. Hopefully you find them interesting. 
            inspo: <a className="text-blue-500 underline" href="https://www.paulgraham.com/articles.html" target="_blank" rel="noopener noreferrer">https://www.paulgraham.com/articles.html</a>
          </div>
          <Divider />
          <ul className="list-disc pl-5">
            {ESSAYS_DATA.map(essay => (
              <li key={essay.id} className="mb-2">
                <Link to={`/essays/${essay.slug}`} className="hover:underline">
                  {essay.title}
                </Link>
              </li>
            ))} 
          </ul>
        </Card>
    )
}

export default Essays
