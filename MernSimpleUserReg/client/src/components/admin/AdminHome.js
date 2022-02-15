import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Table, Container, Button, Form, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Header from '../user/Header';
import './admin.css'
// import Header from '../user/Header';

const AdminHome = () => {
    const [search, setSearch] = useState('');
    const [arr, setArr] = useState([])
    const [refresh, setRefresh] = useState(false)

    const navigate = useNavigate()
    useEffect(async () => {
        const adminInfo = localStorage.getItem("adminInfo")

        if (adminInfo) {

            try {

                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                }

                const { data } = await axios.get("/api/admin", {

                }, config)
                setArr(data)
            }

            catch (error) {
                throw new error(error.response.data.message)
            }


        } else {

            navigate('/adminlogin')
        }
    }, [refresh])

    const clickHandler = async (id) => {
        if (window.confirm(`Sure to Delete?`)) {

            try {

                const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                }
                await axios.delete(`/api/admin/delete/${id}`, {

                }, config)


                setRefresh(!refresh)
            }

            catch (error) {
                throw new error(error.response.data.message)
            }

        }
    }
    const editHandle = (id) => {
        navigate(`/edit/${id}`)
    }

    const searchHandler = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                }
            }
            const { data } = await axios.post('/api/admin', {
                search
            }, config)
            console.log(data);
            setArr(data)
        } catch (error) {

        }
    }
    const backtoAdmin = () => {
        setRefresh(!refresh)
        navigate("/Admin")
    }



    return (

        <div>
            <Header Admin />
            <Navbar bg="light" className='pt-5' expand="lg">
                <Container className='pt-5 '>
                    {/* <Navbar.Brand className='' style={{ cursor: 'pointer' }} onClick={backtoAdmin}>ShopIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="#link" onClick={() => {
                                localStorage.removeItem('adminInfo')

                                navigate('/adminlogin')
                            }}>Log out</Nav.Link>

                        </Nav>
                    </Navbar.Collapse> */}
                    <a className='add-admin px-3 py-2' onClick={() => navigate('/adminregister')}>Add new admin</a>

                    <Form onSubmit={searchHandler} className="d-flex">
                        <FormControl
                            type="text" placeholder="Serach by Name" onChange={(e) => setSearch(e.target.value)}
                            className="me-2 search-bar" value={search} />

                        <button type="submit " variant="ouline-success" className="search-button px-4 ">Search</button>

                    </Form>


                </Container>
            </Navbar>

            <div className="container-fluid bg-light ">
                <div className="row">
                    <div className="col-lg-10">
                    <Table striped bordered hover >
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>

                    {arr.map((e) => {


                        return (
                            <tr>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                <td>{e.phone}</td>
                                <td>{e.email}</td>
                                <td><Button className='px-4 buttons1' onClick={() => { editHandle(e._id) }} ><ion-icon name="create-outline"></ion-icon>Edit</Button> <Button className='px-3 buttons2' onClick={() => { clickHandler(e._id) }}><ion-icon  name="trash-outline"></ion-icon>Delete</Button> </td>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
                    </div>
                </div>
            </div>









        </div>

    )

}

export default AdminHome
