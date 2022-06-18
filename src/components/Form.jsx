import React from "react";
import "../sass/root.scss";
import { useState } from "react";
import SignUp from "./wizardForm/SignUp";
import Personal from "./wizardForm/Personal";
import OtherCmp from "./wizardForm/OtherCmp";
const Form = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dept: "",
    country: "",
    link: "",
    file: "",
  });
  const titles = ["Sign up", "Perosonal Info", "Others Info"];
  const PageDisplay = (page) => {
    if (page === 0) {
      return <SignUp formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <OtherCmp formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="form">
        <div className="progressbar"></div>
        <div className="header">
          <h3>{titles[page]}</h3>
        </div>
        <div className="body">{PageDisplay(page)}</div>
        <div className="buttons">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className=""
            onClick={() => {
              if (page === titles.length - 1) {
                console.log(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === titles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
