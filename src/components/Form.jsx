import React from "react";
import "../sass/root.scss";
import { useState } from "react";
import Step1 from "./wizardForm/Step1";
import Step2 from "./wizardForm/Step2";
import Step3 from "./wizardForm/Step3";
import Step4 from "./wizardForm/Step4";
const Form = () => {
  const [page, setPage] = useState(0);
  const [curation, setCuration] = useState({
    name: "",
    url: "",
    description: "",
    symbol: "",
    category: "",
    uploadThumbnailImage: "",
    mainBannerImage: "",
    videoUrl1: "",
    titleVideo1: "",
    videoUrl2: "",
    titleVideo2: "",
    title1: "",
    subTitle1: "",
    genral: "",
    subTitle2: "",
    subTitle3: "",
    subTitle4: "",

    blockChain: "",
    usdc: "",
    walletAddress: "",
    paymentMethod: "",
  });
  const titles = [
    "Create curation 1",
    " Create curation 2",
    "Create curation 3",
    "Create curation 4",
  ];
  const PageDisplay = (page) => {
    if (page === 0) {
      return <Step1 curation={curation} setCuration={setCuration} />;
    } else if (page === 1) {
      return <Step2 curation={curation} setCuration={setCuration} />;
    } else if (page === 2) {
      return <Step3 curation={curation} setCuration={setCuration} />;
    } else if (page === 3) {
      return <Step4 curation={curation} setCuration={setCuration} />;
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
                console.log(curation);
                localStorage.setItem("CurationData", curation);
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
