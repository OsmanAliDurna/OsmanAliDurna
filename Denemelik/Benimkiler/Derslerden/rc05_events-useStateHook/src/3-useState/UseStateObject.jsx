import React, { useState } from 'react'

const UseStateObject = () => {

    // const [ad,setAd] = useState("Ahmet");
    // const [meslek,setMeslek] = useState("Developer");
    // const [yaş,setYaş] = useState(22);
    const [toggle, setToggle] = useState("false");

    const [kisi, setKisi] = useState({ad:"Ahmet", meslek:"Developer", yaş:22});
    const {ad, meslek, yaş} = kisi;

    const handleSwap = ()=> {
        console.log(kisi);
        console.log(toggle);
        if(!toggle){
            setKisi({...kisi});
        } 
        else{
            setKisi({ad:"Ahmet", meslek:"Developer", yaş:22});
        }
        setToggle(!toggle);
    }

    return ( 
        <div>
            <h1>Personel Formu</h1>
            <h2>Adı : {ad}</h2>
            <h3>Mesleği : {meslek}</h3>
            <h3>Yaşı : {yaş}</h3>

            {/* <button onClick={() => setAd("Mehmet")}>Adı değiştir</button>
            <button onClick={() => setMeslek("Çaycı")}>Mesleği değiştir</button>
            <button onClick={() => setYaş(34)}>Yaşı değiştir</button> */}
            
            <button onClick={() => setKisi({...kisi, ad : "Mehmet"})}>Adı değiştir</button>
            <button onClick={() => setKisi({...kisi, meslek : "Çaycı"})}>Mesleği değiştir</button>
            <button onClick={() => setKisi({...kisi, yaş : "34"})}>Yaşı değiştir</button>

            <button onClick={() => handleSwap()}>Tüm Bilgileri Sıfırla</button>
        </div>
    )
}

export default UseStateObject