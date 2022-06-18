import React from "react";

const Step2 = ({ curation, setCuration }) => {
  return (
    <div className="center">
      <input
        className="common_C"
        type="file"
        name="file"
        value={curation.mainBannerImage}
        onChange={(e) =>
          setCuration({ ...curation, mainBannerImage: e.target.value })
        }
      />
      <input
        className="common_C"
        type="text"
        placeholder="Video Link 1"
        value={curation.videoUrl1}
        onChange={(e) =>
          setCuration({ ...curation, videoUrl1: e.target.value })
        }
      />
      <input
        className="common_C"
        type="text"
        placeholder="Video title 1"
        value={curation.titleVideo1}
        onChange={(e) =>
          setCuration({ ...curation, titleVideo1: e.target.value })
        }
      />
      <input
        type="text"
        className="common_C"
        placeholder="Video Link 2"
        value={curation.videoUrl2}
        onChange={(e) =>
          setCuration({ ...curation, videoUrl2: e.target.value })
        }
      />
      <input
        type="text"
        className="common_C"
        placeholder="Video title 2"
        value={curation.titleVideo2}
        onChange={(e) =>
          setCuration({ ...curation, titleVideo2: e.target.value })
        }
      />
      <input
        type="text"
        className="common_C"
        placeholder="title1"
        value={curation.title1}
        onChange={(e) => setCuration({ ...curation, title1: e.target.value })}
      />
      <input
        type="text"
        className="common_C"
        placeholder="subTitle1"
        value={curation.subTitle1}
        onChange={(e) =>
          setCuration({ ...curation, subTitle1: e.target.value })
        }
      />

      <input
        type="text"
        className="common_C"
        placeholder="General"
        value={curation.genral}
        onChange={(e) => setCuration({ ...curation, genral: e.target.value })}
      />
      <input
        type="text"
        className="common_C"
        placeholder="subTitle2"
        value={curation.subTitle2}
        onChange={(e) =>
          setCuration({ ...curation, subTitle2: e.target.value })
        }
      />
      <input
        type="text"
        className="common_C"
        placeholder="subTitle3"
        value={curation.subTitle3}
        onChange={(e) =>
          setCuration({ ...curation, subTitle3: e.target.value })
        }
      />
      <input
        type="text"
        className="common_C"
        placeholder="subTitle4"
        value={curation.subTitle4}
        onChange={(e) =>
          setCuration({ ...curation, subTitle4: e.target.value })
        }
      />
    </div>
  );
};

export default Step2;
