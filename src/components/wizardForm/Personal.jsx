import React from "react";

const Personal = ({ formData, setFormData }) => {
  return (
    <div className="center">
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        name="dept"
        placeholder="dept"
        value={formData.dept}
        onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
      />
    </div>
  );
};

export default Personal;
