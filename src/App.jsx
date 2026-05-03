import { useState } from "react";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import Modal from './components/Modal'
import Sistema from './pages/Login'

function App() {
  const [openSistema, setOpenSistema] = useState(false);
  return (
    <>
      <Navbar onOpenSistema={() => setOpenSistema(true)} />
      <Home />
      <Gallery />
      <Contacts />
      <Footer onOpenSistema={() => setOpenSistema(true)} />
      <Modal isOpen={openSistema} onClose={() => setOpenSistema(false)}>
        <Sistema />
      </Modal>
    </>
  )
}

export default App
