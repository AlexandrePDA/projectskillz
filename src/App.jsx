import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import NavBar from "../src/Components/NavBar"
import ModalInscription from './Components/ModalInscription'
import ModalConnexion from './Components/ModalConnexion'
import Private from "./Pages/Private/Private"
import PrivateHome from "./Pages/Private/PrivateHome/PrivateHome"
import CreateCard from "./Pages/Private/PrivateHome/CreateCard"



const App = () => {


  return (
    <>
      <ModalConnexion/>
      <ModalInscription/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private" element={<Private />} >
            <Route path="/private/private-home" element={<PrivateHome/>}/>
            <Route path="/private/create-card" element={<CreateCard/>}/>
          </Route>

        </Routes>
      </>
  )
}

export default App;
