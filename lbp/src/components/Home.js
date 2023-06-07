import React, { Fragment, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


function Home() {
  const booksPerPage = 10; // Number of books to display per page
  const [currentPage, setCurrentPage] = useState(1);

  let history = useNavigate();

  const deleteBook = (id) => {
    var index = Books.map(function (e) {
      return e.id
    }).indexOf(id);

    Books.splice(index, 1);

    history('/home');
  }

  // Get the current books to display based on current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(Books.length / booksPerPage);

  // Determine the range of page numbers to display
  let startPage, endPage;
  if (totalPages <= 5) {
    // Display all page numbers if total pages are less than or equal to 5
    startPage = 1;
    endPage = totalPages;
  } else {
    // Display a range of page numbers based on the current page
    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 1 >= totalPages) {
      startPage = totalPages - 4;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  return (
    <>
      <NavBar />
      <Fragment>
        <h2 style={{ margin: "1%" }}>List of Books</h2>
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
              {currentBooks && currentBooks.length > 0 ? (
                currentBooks.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.subject}</td>
                      <td>{item.publishDate}</td>
                      <td>
                        <Button style={{ height: "100%" }} onClick={() => deleteBook(item.id)}>Remove</Button>
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
          <br />
          <div>
            {startPage > 1 && (
              <Button
                variant="link"
                onClick={() => handlePageChange(startPage - 1)}
                style={{ marginRight: "5px",textDecoration:"none",fontWeight:"bold" }}
              >
                {"<"}
              </Button>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map(
              (pageNumber) => (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "primary" : "outline-primary"}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{ marginLeft: "5px"}}
                >
                  {pageNumber}
                </Button>
              )
            )}
            {endPage < totalPages && (
              <Button
                variant="link"
                onClick={() => handlePageChange(endPage + 1)}
                style={{ marginLeft: "5px",textDecoration:"none",fontWeight:"bold" }}
              >
                {">"}
              </Button>
            )}
          </div>
          <br />
          <Link className='d-grid gap-2' to="/home/create">
            <Button size='lg'>Add Book</Button>
          </Link>
        </div>
      </Fragment>
    </>
  );
}

export default Home;