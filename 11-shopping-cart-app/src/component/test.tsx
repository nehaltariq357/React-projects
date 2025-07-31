
import { useContext } from 'react'
import { cartContext } from '../usecontext/cartContext'
const Test = () => {
    const data = useContext(cartContext)
  return (
    <div>
        {data}
    </div>
  )
}

export default Test