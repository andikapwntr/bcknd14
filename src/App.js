import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import {Table} from 'reactstrap'
import { render } from '@testing-library/react';


function App() {

  const [datamovies,setdatamovies] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])


  const fetchdata = async()=>{
    try {
      var res = await Axios.get('http://localhost:5000/db_backend/movies')
      setdatamovies(res.data)
      
    } catch (err) {
      console.log(err)
    }
  }

   const renderTable=()=>{
    return datamovies.map((val,index)=>{
      return(
        <tr key={index}> 
                <th scope='row'>{index+1}</th>
                <td>{val.nama}</td>
                <td>{val.tahun}</td>
                <td>{val.description}</td>
                <td><button className='btn btn-primary'>Edit</button></td>
                <td><button className='btn btn-danger'>Delete</button></td>
        </tr>

      )
    })
  }

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-item-center'>
      <div>
      <Table bordered>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nama</th>
                <th>Tahun</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {renderTable()}
            </tbody>
          </Table>
      </div>
    </div>
  );
}

export default App;
