import React from 'react'

export default function NavBar(prop) { // for multiple agru use- {}  and for object-put prop object  directly eg:(propO)
const {ttl,lnk,label,func}=prop
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-primary py-0">
        <div className="container-fluid" style={{backgroundColor:prop.bclr}}>
          <a className="navbar-brand" href="/" onClick={func}>{ttl}</a> {/* // propO.title */}
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">aaaa</span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="/">{lnk}</a> {/* propO.link2 */}
              <a className="nav-link" href="ChatBot.js">ChatBot</a>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" onClick={func} id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">{label}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
