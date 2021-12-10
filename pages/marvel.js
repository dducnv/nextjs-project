import {useState, useEffect} from "react";

const hash = "bd0722d5750b6362d5ba0212ca36726b";
export default function Marvel(){
    const [loading, setLoad] = useState(true)
    const [items,setItems] = useState([]);
    // useEffect(()=>{
    //     async function fetchData() {
    //         const res = await fetch(`http://gateway.marvel.com/v1/comics/?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b`)
    //         const dataMarvel = await res.json();
    //         console.log(dataMarvel);
    //         setLoad(false)
    //     }
    //     fetchData();
    // },[hash]);
    return(
        <>
            <h1>Marvel Page</h1>
        </>
    )
}