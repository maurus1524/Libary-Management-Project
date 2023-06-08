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
    const titleWords = title.toLowerCase().split(' ');
    const authorWords = author.toLowerCase().split(' ');

    const newpri = userData.filter(x => {
      const lowercaseTitle = x.title.toLowerCase();
      const lowercaseAuthor = x.author.toLowerCase();
      const titleMatch = titleWords.some(word => lowercaseTitle.includes(word));
      const authorMatch = authorWords.some(word => lowercaseAuthor.includes(word));

      return (titleMatch || title === '') && (authorMatch || author === '');
    });

    const newData = newpri.filter(y => y.subject.toLowerCase().includes(subject.toLowerCase()) || subject === '');
    setuserSearchData(newData);
  }

  return <div>
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
