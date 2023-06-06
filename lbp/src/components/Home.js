import React, { Fragment } from 'react';
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import {Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();

    const deleteBook = (id) =>{
        var index = Books.map(function(e){
            return e.id
        }).indexOf(id);

        Books.splice(index,1);

        history('/');
    }

    return (
        <Fragment>
            <div style={{margin:"10%"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Book Name
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Available
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Books && Books.length > 0
                        ?
                        Books.map((item) =>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Category}
                                    </td>
                                    <td>
                                        {item.Available}
                                    </td>
                                    <td>
                                    <Button onClick={() => alert(item.id)}>Edit</Button>
                                    &nbsp;
                                    <Button onClick={() => deleteBook(item.id)}>Remove</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br />
            <Link className='d-grid gap-2' to="/create">
                <Button size='lg'>Add Book</Button>
            </Link>
            </div>
        </Fragment>
    )
}

export default Home;