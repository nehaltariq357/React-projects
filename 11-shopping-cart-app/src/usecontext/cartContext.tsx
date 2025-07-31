//step 01
import { createContext } from "react"; 
interface cartContextType{

}
export const cartContext = createContext<cartContextType | null>(null)