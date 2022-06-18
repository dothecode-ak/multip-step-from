import React from "react";
const OtherCmp = ({ formData, setFormData }) => {
  return (
    <div className="center">
      <select
        name="country"
        id=""
        value={formData.country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      >
        <option value="" selected hidden>
          Please select the country name
        </option>
        <option value="usa">USA</option>
        <option value="india">INDIA</option>
        <option value="nepal">NEPAL</option>
      </select>
      <input
        type="text"
        name="link"
        placeholder="link"
        value={formData.link}
        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
      />
      <input
        type="file"
        name="file"
        value={formData.file}
        onChange={(e) => setFormData({ ...formData, file: e.target.value })}
      />
    </div>
  );
};

export default OtherCmp;
