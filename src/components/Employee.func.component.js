import React, {useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";

function Employee_func() {
const [data, setData] = useState([]);

useEffect(() => {
    axios.get("http://localhost:3000/employees")
    .then( response => {
        setData(response.data);
    });
});
return (
    <>
    <ul>
        {data.map(item => (
            <li key={item.id}>{item.name}-{item.position}</li>
        ))}
        
    </ul>
    </>
);

};

export default Employee_func;