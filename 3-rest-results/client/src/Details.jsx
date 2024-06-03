import EditResult from "./EditResult";
import { useGetResultByIdQuery } from "./state/apiSlice";

export const Details = ({ id }) => {
  const { data, isSuccess } = useGetResultByIdQuery(id);

  return (
    <>
      <h2>Details</h2>
      {isSuccess ? <EditResult data={data} /> : "Betöltés..."}
    </>
  );
};
