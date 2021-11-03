import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Item(props) {
    const [data,setData]=useState([])
    const [search,setSearch]=useState("")

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
        <div>
            <input type="text"
            placeholder="search here"
            onChange={e=>setSearch(e.target.value)}
            
            />
            {
                data
                .filter((item) => {
                    if (search == "") {
                      return item;
                    } else if (
                      item.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                .map((i)=>{
                    return <h6>{i.name}</h6>
                })
            }
        </div>
    );
}

export default Item;