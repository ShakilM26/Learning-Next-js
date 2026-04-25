import React from 'react';
import { useState } from 'react';

function State() {
    const [value, setValue] = useState("Wayne");
    const add = () =>{
        setValue("Damien")
    }
    return(
        <div>
            <p>Hello {value}</p>
            <button onClick={add}>Change Name</button>
        </div>
    )
}

export default State;