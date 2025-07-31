
import { useContext } from 'react'
import { userContext } from '../../UserContext'
const Child = () => {
    const user = useContext(userContext)
  return (
    <h1>Hello, {user}</h1>
  )
}

export default Child