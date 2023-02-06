import React from 'react'

export const Direccion = () => {
  return (
    <>
    <form className="row g-3">
  <div className="col-md-6">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Telefono</label>
    <input type="tel" className="form-control" />
  </div>
  <div className="col-12">
    <label  className="form-label">dirección 1</label>
    <input type="text" className="form-control" id="inputAddress" />
  </div>
  <div className="col-12">
    <label  className="form-label">dirección2</label>
    <input type="text" className="form-control" id="inputAddress2" defaultValue=""/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Estado</label>
    <select id="inputState" className="form-select">
      <option defaultValue>CDMX</option>
      <option>...</option>
      <option>...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label  className="form-label">C. P.</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  
</form>
    </>
  )
}
