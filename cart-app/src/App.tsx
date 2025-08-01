
import './App.css'
import CartSummary from './component/CartSummary'
import Products from './component/Products'


function App() {
return(
  <div>
    <h1 className='underline'>hellow</h1>
    {/* <Test/> */}
    <Products/>
    <h1>my cart</h1>
    <CartSummary/>
  </div>
)
}

export default App
