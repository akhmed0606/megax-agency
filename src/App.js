import { Route, Routes } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import { Home,Footer,Pricing,Navbar,Products } from './components'


function App() {
  return (
     <>
     <GlobalStyle />
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />}> </Route>
        <Route path="/service" element={ <Pricing />}>
        </Route>
        <Route path="/products" element={ <Products />}>
        </Route>
        <Route path="/sign-up" element={<Footer />}> 
        </Route>
      </Routes>
       </>   
  );
}

export default App;
