// src/components/Pokemon.js
import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="Pokemon card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h2 className="card-title">{props.name}</h2>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p className="mb-0">
          <strong>Weight: </strong>
          {props.weight} kg
          <br />
          <strong>Terrifying:</strong>{" "}
          {props.terrifying ? "Very" : "nah, lovable"}
          <br />
          <strong>Abilities:</strong> {props.abilities.length}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
