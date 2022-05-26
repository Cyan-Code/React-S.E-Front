import axios from "axios";
import { useState } from "react";

export const useFetch = async (url='', method='get') => {
    const token = localStorage.setItem('x-token')||'';
    const [data, setData] = useState([]);
    await axios({
      method,
      url:`http://localhost/${url}`,
      headers: {
        "x-token": token
      }
    }).then((data)=> JSON.stringify(data))
      .then((data)=> setData(data));
    return data;
}
