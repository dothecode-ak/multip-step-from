import React from "react";
const Step3 = ({ curation, setCuration }) => {
  return (
    <div className="center">
      <select
        className="common_C"
        name="blockChain"
        id=""
        value={curation.blockChain}
        onChange={(e) =>
          setCuration({ ...curation, blockChain: e.target.value })
        }
      >
        <option value="" selected hidden>
          Please select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <select
        className="common_C"
        name="usdc"
        id=""
        value={curation.usdc}
        onChange={(e) => setCuration({ ...curation, usdc: e.target.value })}
      >
        <option value="" selected hidden>
          Please select coin
        </option>
        <option value="usdc">USD Coin</option>
        <option value="MOX">MOX</option>
      </select>
    </div>
  );
};

export default Step3;
