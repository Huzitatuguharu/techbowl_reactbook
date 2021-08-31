
import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { Router } from "../router/Router";
import axios from "axios";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const [token, setToken] = useState(null);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {



    const requestUrl = 'https://api-for-missions-and-railways.herokuapp.com/signin';

    console.log(data.email);
console.log(data);

    axios.post(requestUrl, {
  email: data.email,
  password: data.password
  })
  .then(function (response) {
    console.log(response);

    const newtoken=response.data.token
    setToken(newtoken);

    console.log(token);




  })
  .catch(function (error) {
    console.log(error);
  });
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  // console.log(register);
   // ここから

  const PostAPI = async () => {

  //   fetch(requestUrl, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: 'Hubot',
  //     login: 'hubot',
  //   })
  // }).then(function(response) {
  //   // レスポンス結果
  // }, function(error) {
  //   // エラー内容
  // });

  }



  // const result = getData?.(language); // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる

  return (
    <>
      <p>サインアップ</p>

      {/* formタグに対して、コールバックを渡したhandleSubmitを設定 */}
      <form onSubmit={handleSubmit(onSubmit)}>

        <label>email</label>
      <input
        {...register("email", { required: true })}
      />
        {errors.email && <p>emailは必須です。</p>}

          <label>password</label>
        <input
        {...register("password", { required: true })}
      />
      {errors.password && <p>passwordは必須です。</p>}
      <input  type="submit" />
    </form>


    </>
  );
};
