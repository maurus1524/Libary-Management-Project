import React,{ useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './Books';
import { Table } from "react-bootstrap";
import NavBar from './NavBar';

function BookFilter() {
  const[userData,setUserData] = React.useState([]);
  const[userSearchData,setuserSearchData] = React.useState([]);
  const[title,setTitle] = React.useState('');
  const[author,setAuthor] = React.useState('');
  const[subject,setSubject] = React.useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  React.useEffect(() => {
    const data = Books;

    setUserData(data);
    setuserSearchData(data);
    setCurrentPage(1);
  },[])

  const handleSearch = () => {
    const newpri = userData.filter(x => {
      const lowercaseTitle = x.title.toLowerCase();
      const lowercaseAuthor = x.author.toLowerCase();
      const lowercaseSearchTitle = title.toLowerCase();
      const lowercaseSearchAuthor = author.toLowerCase();

      const titleMatch = lowercaseTitle.includes(lowercaseSearchTitle);

      const authorMatch = lowercaseAuthor.includes(lowercaseSearchAuthor);
  
      return (titleMatch || title === '') && (authorMatch || author === '');
    });
  
    const newData = newpri.filter(y => {
      const lowercaseSubject = y.subject.toLowerCase();
      const lowercaseSearchSubject = subject.toLowerCase();
      return lowercaseSubject.includes(lowercaseSearchSubject) || subject === '';
    });
    setuserSearchData(newData);
    setCurrentPage(1);
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = userSearchData.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(userSearchData.length / booksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return <div style={{height:"100vh"}} className="bookmarkkbg">
    <NavBar></NavBar>
    <Table hover style={{marginTop:"2vh",marginBottom:"3vh"}}>
      <tr style={{display:"flex", justifyContent:"space-around" , flexDirection:"row"}}>
        <td>
          <input type="text" placeholder="Enter Title..." onChange={(e) => setTitle(e.target.value)} style={{width:"20vw"}}/>
        </td>
        <td>
          <input className="form-control" type="text" placeholder="Enter Author..." onChange={(e) => setAuthor(e.target.value)} style={{border: "0.5px solid black",borderRadius:"0px",boxShadow:"inset 0.5px 0.5px 0.5px black",width:"20vw"}} />
        </td>
        <td>
          <select className="form-control" onChange={(e) => setSubject(e.target.value)} style={{border: "0.5px solid black",borderRadius:"0px",boxShadow:"inset 0.5px 0.5px 0.5px black", width:"20vw"}} >
            <option value="">-Select-</option>
            <option value="Fiction">Fiction</option>
            <option value="Classic">Classic</option>
            <option value="Thriller">Thriller</option>
            <option value="Programming">Programming</option>
            <option value="Biography">Biography</option>
            <option value="Romance">Romance</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </td>
        <td>
          <button className="btn btn-filter" style={{background:"#080202", color:"white", borderRadius:"4px",width:"8vw"}} onClick={() => handleSearch()}>Search</button>
        </td>
      </tr>
    </Table>
    <h2 style={{margin:"3vh"}}>Available Books</h2>
    <Table responsive striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Subject</th>
          <th>Publish Date</th>
        </tr>
      </thead>
      <tbody>
      {currentBooks.length > 0 ? (
            currentBooks.map(item => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.subject}</td>
                <td>{item.publishDate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data</td>
            </tr>
          )}
        </tbody>
        <nav style={{ position: "fixed", bottom: "10vh", left: "50%", transform: "translateX(-50%)" }}>
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
    </Table>

  </div>
}

export default BookFilter;
