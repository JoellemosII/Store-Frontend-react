
import { Navbar } from "./components/layout/Navbar/Navbar"
import { Footer } from "./components/layout/Footer/Footer"
import { ItemListContainer } from "./components/pages/itemsListContainer/ItemListContainer"

function App() {/*Padre */
  

  return ( /**Hijos */
    <>
    <Navbar/>
    <ItemListContainer />
    <Footer/>
    </>
  )
}

export default App
