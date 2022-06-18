import React from "react";
const Step1 = ({ curation, setCuration }) => {
  return (
    <div className="center">
      <input
        className="common_C"
        type="text"
        placeholder="Name"
        value={curation.email}
        onChange={(e) => setCuration({ ...curation, name: e.target.value })}
      />
      <input
        className="common_C"
        type="text"
        placeholder="URL"
        value={curation.url}
        onChange={(e) => setCuration({ ...curation, url: e.target.value })}
      />
      <input
        type="text"
        className="common_C"
        placeholder="Description"
        value={curation.password}
        onChange={(e) =>
          setCuration({ ...curation, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Symbol"
        className="common_C"
        value={curation.symbol}
        onChange={(e) => setCuration({ ...curation, symbol: e.target.value })}
      />
      <select
        name="category"
        className="common_C"
        id=""
        value={curation.category}
        onChange={(e) => setCuration({ ...curation, category: e.target.value })}
      >
        <option value="" selected hidden>
          Please select the category
        </option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <input
        type="file"
        className="common_C"
        name="file"
        value={curation.uploadThumbnailImage}
        onChange={(e) =>
          setCuration({ ...curation, uploadThumbnailImage: e.target.value })
        }
      />
    </div>
  );
};

export default Step1;
