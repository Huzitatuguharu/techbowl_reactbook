
import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { Router } from "../router/Router";
import axios from "axios";


export const Home = () => {

  type Book = {
    id: string,
    title: string,
    url: string,
    detail: string,
    review: string,
    reviewer: string
};
  const [token, setToken] = useState(null);

   const requestUrl = 'https://api-for-missions-and-railways.herokuapp.com/books';

  const onClickGet = () => {
    axios.get(requestUrl, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA0Nzg4NTEsImlhdCI6IjIwMjEtMDgtMzFUMDY6NDc6MzEuODQ0Nzc5MDVaIiwic3ViIjoiNTQ1NDY1NTczNTQiLCJ1c2VyX2lkIjoiMDFiMzA1NzItNzJjMi00ZjYyLTk4MTctMGZiMDE1MTI1M2VmIn0.NvSSYK-dPqYFBL7RT4Bzw56nBff2UVPT1GlKSRwh918"
      }
    })
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  // const result = getData?.(language); // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる

  return (
    <>
      <h1>ホーム画面</h1>
      <button onClick={onClickGet}>取得</button>



    </>
  );
};
