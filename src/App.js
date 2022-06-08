import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // calling useEffect to only fetch data initially
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    },
    // don't specify dependencies
    []
  );

  // listening for changes on searchField, then render
  useEffect(
    () => {
      // create new filtered array where the name includes input values
      const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredMonsters(newFilteredMonsters);
    },
    // only run useEffect when monsters or searchField values change
    [monsters, searchField]
  );

  function onSearchChange(event) {
    // getting hold of lowercase input value
    const inputValue = event.target.value.toLocaleLowerCase();
    // update state with the input value
    setSearchField(inputValue);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        // Passing props over to component
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// {// Create class called App
// // Extend the functionality of Component Class with App
// class App extends Component {
//   // whenever this app is contructed run this first
//   constructor() {
//     // calling the contructor method of the Component Class
//     super();

//     // Instantiating a state (json object)
//     // Initializing empty state
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   // updating state
//   // only gets run once initially
//   componentDidMount() {
//     // getting hold of data with native fetch
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // promise for eventually receiving values
//       // converting the response object to json
//       .then((response) => response.json())
//       //passing the values from response to users, as the argument for the callback
//       .then((users) =>
//         // updating state with values from users
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     // getting hold of lowercase input value
//     const value = event.target.value.toLocaleLowerCase();
//     // update state with the input value
//     this.setState(() => {
//       return { searchField: value };
//     });
//   };

//   // Passing the return to the render method from the Component Class
//   render() {
//     //destructuring to avoid using this.state.monsters, this.state.onSearchChange
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // create new array where the name includes input values
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           // Passing props over to component
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }}

export default App;
