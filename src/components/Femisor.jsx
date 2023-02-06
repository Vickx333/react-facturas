import React from 'react'
import './formu.css'

const Femisor = () => {
  return (
    <>
    
    <div >
    <h2 className='titulo container p-4'>Emisor</h2>
     <div>
          <label>Negocio:</label>
     <select className="form-select form-select-lg mb-3" aria-label="">
  <option value=''>selecciona una opción</option>
  <option value="1">Opción1</option>
  <option value="2">Opción2</option>
  <option value="3">Opción3</option>
</select>

{/* concepto */}

<label>Concepto:</label>
<select className="form-select form-select-sm" aria-label="Negocio:" >
  <option value=''>selecciona una opción</option>
  <option value="1">opción 1</option>
  <option value="2">opción 2</option>
  <option value="3">opción 3</option>
</select>

     </div>
      <br/>

     {/* sociedad */}


     <div>
     <div className="input-group mb-3">
  <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Sociedad:</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

{/* subconcepto */}
<div className="mb-3">
      <label  className="form-label">Subconsepto:</label>
      <select id="subconcepto" className="form-select ">
        <option defaultValue>selecciona un aopción</option>
        <option>opción 1</option>
        <option>opción 2</option>
      </select>
      </div>
     </div>
     
     <br/>


     {/* rfc */}
     <div>
     <div className=" input-group mb-3">
     <span className="input-group-text bg-primary text-white font-weight-bold" id="inputGroup-sizing-default">RFC:</span>
      <input className="form-control form-control-lg" type="text"  aria-label="ingresa rfc"/>

    </div>
{/* razon fiscal */}

    <label>Regimen fiscal:</label>
    <select className="form-select" aria-label="">
  <option defaultValue='selecciona una opcion'>selecciona una opción</option>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
  <option value="3">Opcion 3</option>
</select>
     </div>
   

     {/* <input type="text" placeholder='selecciona una opci'/> */}
    </div>
    </>
  )
}

export default Femisor