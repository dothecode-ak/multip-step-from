import React from "react";

const step4 = ({ curation, setCuration }) => {
  return (
    <div className="center">
      <select
        name="payment"
        id=""
        className="common_C"
        value={curation.paymentMethod}
        onChange={(e) =>
          setCuration({ ...curation, paymentMethod: e.target.value })
        }
      >
        <option value="" selected hidden>
          Please select the payment method
        </option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
      <input
        type="text"
        placeholder="walletAddress"
        className="common_C"
        value={curation.walletAddress}
        onChange={(e) =>
          setCuration({ ...curation, walletAddress: e.target.value })
        }
      />
    </div>
  );
};

export default step4;
