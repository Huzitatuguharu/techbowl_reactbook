
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Page404 = () => {

  // const result = getData?.(language); // `?`を使用することで，`getData`が存在する場合のみ関数を実行できる

  return (
    <>
      <p>ページが存在しません</p>
      <Link to="/">ホームに戻る</Link>
    </>
  );
};
