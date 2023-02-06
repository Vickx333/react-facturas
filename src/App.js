
import {Routes, Link, Route} from 'react-router-dom'
import Femisor from './components/Femisor';
import Freceptor from './components/Freceptor';
import './App.css'




function App() {
  return (
    <div className=" container-xxl   p-4">
    <ul className="nav nav-tabs bg-primary text-white">
    <h3 className='logo '>Solicitud Factura </h3>
  <li className="nav-item">
    <Link className='nav-link text-white'  to={'form-emisor/form'}>Emisor</Link>
  </li>
  <li className="nav-item">
    <Link className='nav-link text-white'  to={'form-receptor/form'}>receptor</Link>
  </li>
  <li className="nav-item">
    <Link className='nav-link text-white' to={'form-cfdi/form'}>CFDI</Link>
  </li>
 
</ul>

     {/* <li ><Link clasName='cta_menu' to={'form-emisor/form'}>Emisor</Link></li>
      <li ><Link className='cta_menu' to={'form-receptor/form'}>receptor</Link></li>
      <li ><Link className='cta_menu' to={'form-cfdi/form'}>CFDI</Link></li> */}
    <div>
      <Routes>
        <Route path='form-emisor/form' element={<Femisor/>}/>
        <Route path='form-receptor/form' element={<Freceptor/>}/>
        <Route path='form-cfdi/form' element={<h2>formulario CFDI</h2>}/>
      </Routes>
     
    </div>
    </div>
  );
}

export default App;
