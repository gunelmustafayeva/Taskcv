import Main from './Main/Main.jsx'
import Nav from './Nav/Nav.jsx'
import { useState } from 'react';
function App() {
  const [showMain, setShowMain] = useState(false);
  return (
    <>
    <Nav setShowMain={setShowMain}  showMain={showMain}/>
    {showMain&&<Main/>}
    </>
  )
}

export default App
