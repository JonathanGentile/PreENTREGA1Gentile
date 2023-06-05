import Header from "./components/Header/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    
    <div>
      <Header />
      <ItemListContainer mensaje="Equipamientos LOW COST" />
    </div>
    


    

  )
}

export default App
