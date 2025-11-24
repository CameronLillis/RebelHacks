'use client'

import Image from "next/image";
import axios from "axios";
import {useState} from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post('/sample', {
        key: 'value'
      });
      setData(response.data);
      console.log("Data: ", data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button onClick={fetchData}>AAAA</button>
  );
}
