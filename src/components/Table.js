import React,{useState,useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'username', headerName: 'UserName', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  
];



export default function DataTable() {
    const [data,setData]=useState([])

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async()=>{
    
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
        const finalData = res.data
        setData(finalData)
    }
    

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        searchbar
      />
    </div>
  );
}