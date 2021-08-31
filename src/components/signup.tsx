
import React,{useState} from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import { Router } from "../router/Router";
import axios from "axios";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export const Signup = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const [token, setToken] = useState(null);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {



    const requestUrl = 'https://api-for-missions-and-railways.herokuapp.com/users';

    console.log(data.name);
console.log(data);

    axios.post(requestUrl, {
    name: data.name,
  email: data.email,
  password: data.password
  })
  .then(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.data.token);

    const newtoken=response.data.token
    setToken(newtoken);

    console.log(token);




  })
  .catch(function (error) {
    console.log(error);
  });
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch("name")); // you can watch individual input by pass the name of the input
  // console.log(register);

  return (
    <>
      <h1>新規会員登録</h1>

      {/* formタグに対して、コールバックを渡したhandleSubmitを設定 */}
      <form onSubmit={handleSubmit(onSubmit)}>

      <label>name</label>
      <input {...register("name", { required: true })} defaultValue="テック太郎" />
        {errors.password && <p>名前は必須です。</p>}

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
