import { useState } from "react";
import { useCreateResultMutation } from "./state/apiSlice";

export const NewResult = ({ onCancel }) => {
  const [name, setName] = useState("");
  const [result, setResult] = useState(0);

  const [create] = useCreateResultMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await create({ name, result: Number(result) });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="result">Result: </label>
          <input
            id="result"
            name="result"
            type="number"
            value={result}
            onChange={(e) => setResult(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add</button>
        <button onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
};
