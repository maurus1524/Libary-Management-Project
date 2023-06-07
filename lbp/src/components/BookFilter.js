import React from "react";
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

  React.useEffect(() => {
    const data = Books;

    setUserData(data);
    setuserSearchData(data);
  },[])

  const handleSearch = () => {
    const newpri = userData.filter(x => x.title === (title === '' ? x.title : title));
    const newData = newpri.filter(x => x.author === (author === '' ? x.author : author))
    .filter(y => y.subject === (subject === '' ? y.subject : subject));
    setuserSearchData(newData);
  }

  return <div>
    <NavBar></NavBar>
    <Table>
      <tr>
        <td>
          <input type="text" placeholder="Enter Title..." onChange={(e) => setTitle(e.target.value)} />
        </td>
        <td>
          <input className="form-control" type="text" placeholder="Enter Author..." onChange={(e) => setAuthor(e.target.value)} />
        </td>
        <td>
          <select className="form-control" onChange={(e) => setSubject(e.target.value)}>
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
          <button className="btn btn-filter" onClick={() => handleSearch()}>Search</button>
        </td>
      </tr>
    </Table>

    <Table responsive stripped size="sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Subject</th>
          <th>Publish Date</th>
        </tr>
      </thead>
      <tbody>
        { 
        userSearchData && userSearchData.length >0 ? 
        userSearchData.map(item => 
          <tr>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.subject}</td>
            <td>{item.publishDate}</td>
          </tr>
          )
          : 'No Data'
        }
      </tbody>
    </Table>
  </div>
}

export default BookFilter;
