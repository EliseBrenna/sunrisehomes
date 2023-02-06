import { useParams } from "react-router-dom";

export const Objekt = () => {
  let { id } = useParams();

  return (
    <main>
      <div className="content">
        <div className="content-container">
          <h3>{id}</h3>
        </div>
      </div>
    </main>
  );
};
