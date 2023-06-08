import React, { Fragment, useState,useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';


function Home() {
  const booksPerPage = 10; // Number of books to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);

  let history = useNavigate();

  const handleMark = (book) => {
    const { id, title, author, subject, publishDate } = book;
  
    setBookmarkedBooks((prevBookmarks) => [
      ...prevBookmarks,
      {
        id,
        title,
        author,
        subject,
        publishDate,
      },
    ]);
  };

  useEffect(() => {
    console.log(bookmarkedBooks);
  }, [bookmarkedBooks]);  

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
  const totalPages = Math.ceil(Books.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  window.bookmarkedBooks = bookmarkedBooks;

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
                        <Button style={{ height: "100%",marginLeft:"3%" }} onClick={() => handleMark(item)}>Bookmark</Button>
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
          <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                  <span style={{ color: currentPage === 1 ? '#777' : '' }}>&lt;</span>
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                const isCurrentPage = currentPage === page;
                const isMiddlePage = page >= currentPage - 2 && page <= currentPage + 2;

                if (isMiddlePage || isCurrentPage) {
                  return (
                    <li key={index} className={`page-item ${isCurrentPage ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => paginate(page)}>
                        {page}
                      </button>
                    </li>
                  );
                }

                return null;
              })}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                  <span style={{ color: currentPage === totalPages ? '#777' : '' }}>&gt;</span>
                </button>
              </li>
            </ul>
          </nav>
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