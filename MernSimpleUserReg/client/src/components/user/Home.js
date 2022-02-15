import React ,{useEffect,useState ,Fragment} from 'react'
// import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './home.css'
import Header from './Header';
import Cards from './Card';




const Home = () => {
    const [name, setName] = useState("user")
    let navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        const info = JSON.parse(userInfo)
        setName(info ? info.fname:"user")
        if(userInfo){
                    navigate('/')
        }else{
            navigate("/login")
        }
       
    }, [navigate])
    return (

        <Fragment>
            <Header title ={name}/>
        <div className=" banner pt-4 ">
          <div className="rows pt-5">
            <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="" />
                  <div className="carousel-caption d-none  d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-12.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src="http://www.shoe-kart.com/media/magentothem/banner7/banner7-1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>GET UP TO 45% OFF ON BRANDED SHOES</h1>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <Cards/>
      </Fragment>
        // <div>
        //     <Navbar bg="light" expand="lg">
        //         <Container>
        //             <Navbar.Brand href="#home">ShopIT</Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="me-auto">
        //                     <Nav.Link href="#home">Home</Nav.Link>
        //                     <Nav.Link href="#link">Link</Nav.Link>
        //                     <NavDropdown title ={name} id="basic-nav-dropdown">
        //                         <NavDropdown.Item onClick={()=>{
        //                             localStorage.removeItem('userInfo')
                                 
        //                             navigate('/login')
        //                         }}>Logout</NavDropdown.Item>


        //                     </NavDropdown>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        //     <h1>Welcome {name}</h1>
        // </div>
    )
}

export default Home
