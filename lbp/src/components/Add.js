import React,{useState} from "react";
import { Button,Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'
import NavBar from './NavBar';

function Add(){

    const[title,setTitle] = useState('');
    const[author,setAuthor] = useState('');
    const[subject,setSubject] = useState('');
    const[publishDate,setpublishDate] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = title,
        b = author,
        c = subject,
        d = publishDate;

        Books.push({id: uniqueId, title: a, author:b, subject:c, publishDate:d});

        history("/home");
    }

    return (
        <>
            <NavBar></NavBar>
                <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                    <Form.Group className="mb-3" controlId="formTitle" style={{width:"15%"}}>
                        <Form.Control type="text" placeholder="Enter Book Title" required onChange={(e) => setTitle(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAuthor">
                        <Form.Control type="text" placeholder="Enter Author" required onChange={(e) => setAuthor(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSubject">
                        <Form.Control type="text" placeholder="Enter Subject" required onChange={(e) => setSubject(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPublishdate">
                        <Form.Control type="text" placeholder="Enter Publish Date" required onChange={(e) => setpublishDate(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
                </Form>
        </>
    )
}

export default Add;