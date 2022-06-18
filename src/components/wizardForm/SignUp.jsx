import React from "react";
const SignUp = ({ formData, setFormData }) => {
  return (
    <div className="center">
      <input
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
  );
};

export default SignUp;
