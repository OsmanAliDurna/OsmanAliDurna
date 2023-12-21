//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react
//* =============================================================
// import React, { useState, useEffect, useContext } from 'react';
import React, { useState } from 'react';

const UseStateCounter = () => {

    const [sayac, setSayac] = useState(0);

    const handleInc = () => {
        setSayac(sayac + 1);
    }

    const handleClr = () => {
        setSayac(0);
    }

    return ( 
    <div> 
        <h1>UseStateCounter</h1>
        <h2>Count : {sayac}</h2>

        <button onClick={handleInc}>INC</button>
        <button onClick={handleClr}>CLR</button>
        <button onClick={() => sayac > 0 && setSayac(sayac-1)}>DEC</button>

         {/* Eger setSayac metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da sayac state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setSayac araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}
         
    </div>
    );
};

export default UseStateCounter;