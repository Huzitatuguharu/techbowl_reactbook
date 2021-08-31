
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
        Authorization: 
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
