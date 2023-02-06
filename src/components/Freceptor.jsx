import React from 'react'
import { Direccion } from './Direccion'

const Freseptor = () => {
  return (
    <>
    <div>
      <h2 className='titulo container p-4'> Receptor</h2>
    <div>
      {/* cliente */}
      <label>Cliente:</label>
     <select className="form-select form-select-lg mb-3" aria-label="">
  <option value=''>selecciona una opción</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
  <option value="3">Opción 3</option>
</select>
<div className="mb-3">
      <label className="form-label">Razón social:</label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Razón socila"/>
    </div>
    {/* rfc */}
    <div className=" input-group mb-3">
     <span className="input-group-text bg-primary text-white font-weight-bold" id="inputGroup-sizing-default">RFC:</span>
      <input className="form-control form-control-lg" type="text"  aria-label="ingresa rfc"/>

    </div>
    {/* datos del receptos */}
    <h3>direccion</h3>
    <Direccion/>
    
    

      
 

     

    </div>
    </div>
    </>
  )
}

export default Freseptor