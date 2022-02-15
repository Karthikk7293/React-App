import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import './header.css'

function Header(props) {
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/Admin')
  }
  const handleClick3 = (e) => {
    e.preventDefault()
    navigate('/')
  }
  console.log(props.title);
  return (
    <Fragment >
      <div className="container-fluid navbar-row ">
        <div className="row mt-2 ">

          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div className="col-lg-3 col-6">
                {props.admin ? <a className="navbar-brand logo" href='/#' onClick={handleClick}>{props.title}</a> : <a className="navbar-brand logo" href='/#' onClick={handleClick}>SHOE -CART</a>}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-lg-5">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" href='/#' aria-current="page" onClick={handleClick3}>HOME</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href='/#' onClick={handleClick3} >FEATURE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href='/#' onClick={handleClick3}>PRICING</a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-6 justify-content-end ">
                {props.Admin ? <form className="d-flex">
                  {/* <input className="search-bar " type="search" placeholder="Search" aria-label="Search" /> */}
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <a className="nav-link text-uppercase" href='/#' >{props.title}</a>
                    </li>
                    <li className="nav-item text-end">
                      <a className="nav-link" href='/#' onClick={() => {
                                localStorage.removeItem('adminInfo')
                                navigate('/adminlogin')
                            }}>Logout</a>
                    </li>

                  </ul>
                </form> :  <form className="d-flex">
                 <input className="search-bar " type="search" placeholder="Search" aria-label="Search" />
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <a className="nav-link text-uppercase" href='/#' >{props.title}</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href='/#' onClick={()=>{
                                     localStorage.removeItem('userInfo')
                                     navigate('/login')}}>Logout</a>
                    </li>

                  </ul>
                </form> }
               


              </div>
            </div>
          </nav>


        </div>
      </div>
    </Fragment>
  )
}

export default Header