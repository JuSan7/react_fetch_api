import React from "react";
import Button from "./Button";

const Form = ({ setReqType, reqType }) => {
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <Button setReqType={setReqType} reqType={reqType} buttonText="users" />
      <Button setReqType={setReqType} reqType={reqType} buttonText="posts" />
      <Button setReqType={setReqType} reqType={reqType} buttonText="comments" />
    </form>
  );
};

export default Form;
