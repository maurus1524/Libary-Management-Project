import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'
import NavBar from './NavBar';

function Add(){

    const[name,setName] = useState('');
    const[category,setCategory] = useState('');
    const[available,setAvailable] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = category,
        c = available;

        Books.push({id: uniqueId, Name: a, Category:b,
        Available:c});

        history("/home");
    }

    return (
        <>
            <NavBar></NavBar>
            <div>
                <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter Book Name" required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAge">
                        <Form.Control type="text" placeholder="Enter Book Category" required onChange={(e) => setCategory(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAvailable">
                        <Form.Control type="text" placeholder="Enter Book Available" required onChange={(e) => setAvailable(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default Add;