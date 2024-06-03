import React, { useState } from "react";
import { useUpdateResultMutation } from "./state/apiSlice";

function EditResult({ data: initialData }) {
  const [data, setData] = useState(initialData);

  const [update] = useUpdateResultMutation();

  function handleFormChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await update({ id: initialData.id, body: { name: data.name, result: Number(data.result) } });
    } catch (error) {}
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={data.name} onChange={handleFormChange}></input>
      </div>
      <div className="form-group">
        <label htmlFor="result">Result: </label>
        <input id="result" name="result" type="number" value={data.result} onChange={handleFormChange}></input>
      </div>
      <button>Modify</button>
    </form>
  );
}

export default EditResult;
