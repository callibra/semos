import React,{useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(json=>setData(json))
        .catch(err=>alert(err))
    },[url]);

    return [data];
}

export default useFetch;