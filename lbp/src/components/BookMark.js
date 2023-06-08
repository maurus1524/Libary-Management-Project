import React,{Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import NavBar from './NavBar';
import { useNavigate  } from "react-router-dom";


function BookMark(){
    const Bookmarkob = window.bookmarkedBooks;

    let history = useNavigate();

    const deleteBook = (id) => {
        var index = Bookmarkob.map(function (e) {
          return e.id
        }).indexOf(id);
    
        Bookmarkob.splice(index, 1);
    
        history('/bookmark');
      }

    return (
        <div className="bookmarkpg" style={{height:"100vh"}}>
            <NavBar />
            <Fragment>
                <h2 style={{ margin: "1%",color:"#bed3e8" }}>Your Bookmark</h2>
                <div style={{ marginTop: "2%", marginLeft: "5%", marginRight: "5%", fontSize: "15px" }}>
                <Table striped bordered hover size="sm" style={{ tableLayout: "fixed" }}>
                    <thead>
                    <tr>
                        <th>
                        Title
                        </th>
                        <th>
                        Author
                        </th>
                        <th>
                        Subject
                        </th>
                        <th>
                        Publish Date
                        </th>
                        <th>
                        Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {Bookmarkob && Bookmarkob.length > 0 ? (
                        Bookmarkob.map((item) => {
                        return (
                            <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.subject}</td>
                            <td>{item.publishDate}</td>
                            <td>
                                <button style={{ height: "100%" }} onClick={() => deleteBook(item.id)}>Remove</button>
                            </td>
                            </tr>
                        );
                        })
                    ) : (
                        <tr>
                        <td colSpan={5}>No data available</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                </div>
            </Fragment>
        </div>
    )
}

export default BookMark;