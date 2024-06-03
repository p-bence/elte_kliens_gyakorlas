import { useState } from "react";
import "./App.css";
import { Details } from "./Details";
import { useGetResultsQuery, useRemoveResultMutation } from "./state/apiSlice";
import { NewResult } from "./NewResult";

function App() {
  const { data: results } = useGetResultsQuery();

  const [remove] = useRemoveResultMutation();

  const [isNewFormOpen, setIsNewFormOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const isEditFormOpen = selectedId !== null;

  function openNewForm() {
    setSelectedId(null);
    setIsNewFormOpen(true);
  }

  function openEditForm(id) {
    setIsNewFormOpen(false);
    setSelectedId(id);
  }

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {results?.map((d) => (
              <tr key={d.id} className={d.id === selectedId ? "selected" : ""}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.result}</td>
                <td>
                  <button onClick={() => openEditForm(d.id)}>Modify</button>
                  <button onClick={() => remove(d.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <span>
          <button onClick={openNewForm}>New Result</button>
        </span>
      </div>

      <div>
        {isNewFormOpen && <NewResult onCancel={() => setIsNewFormOpen(false)} />}
        {isEditFormOpen && <Details id={selectedId} />}
      </div>
    </>
  );
}

export default App;
