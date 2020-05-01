import React from 'react'
import Notes from 'Modules/notes/Notes'
import { useParams } from 'react-router-dom'

const SearchResults = () => {
  let { searchTerm } = useParams()
  return <Notes searchTerm={searchTerm} />
}

export default SearchResults
