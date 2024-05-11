import React from "react";
import Data from "./Data";


export default function Todo({ handleDelete, data ,handleCheck}) {

  return (
    <>
     
      {data.length ? (
        <Data handleDelete={handleDelete} data={data}  handleCheck={handleCheck}/>
      ) : (
        <p className="text-danger text-center">Empty List</p>
      )}
    </>
  );
}
