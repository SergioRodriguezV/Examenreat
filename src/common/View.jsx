import React, { Component } from 'react';

const View = ({tipo,valor,id,clase}) => {
    return ( 
        <input type={tipo} value={valor} id={id} className={clase}/>
     );
}
 
export default View;