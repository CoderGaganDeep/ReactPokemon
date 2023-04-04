import "./App.css";
import Pokemon from "./components/Pokemon";
import Title from "./components/Title";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

// start of function

function App() {
  return (
    <main className="container my-5">
      <Title content="Pokemon Cards" />
      <div className="row"></div>

      {all_pokemon.map((pokemon, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <Pokemon
            name={pokemon.name}
            weight={pokemon.weight}
            awesome={pokemon.awesome}
            terrifying={pokemon.terrifying}
            abilities={pokemon.abilities}
          />
        </div>
      ))}
    </main>
  );
}
export default App;
