import {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // name: { firstName: "Osman", secondName: "Ali" },
      // company: "Anywhere",
      monsters: [{
          name: "A",
        },
        {
          name: "L",
        },
        {
          name: "i",
        }

      ]
    };
  }

  render() {
    return ( <
      div className = "App" > {
        /* <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Hi {this.state.name.firstName} {this.state.name.secondName}, I just
                    want to work at {this.state.company}
                  </p>
                  <button
                    onClick={() => {
                      // this.setState({ name: "Anyone" });
                      this.setState(
                        (state, props) => {
                          return {
                            name: { firstName: "Any", secondName: "One" },
                          };
                        },
                        () => {
                          console.log(this.state);
                        }
                      );
                    }}
                  >
                    Change Name
                  </button>
                </header> */
      this.state.monsters.map((monster) => {
        return <h1>{monster.name}</h1>;
      })
              } 
      </div>
    );
  }
}
export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code> src / App.js </code> and save to reload.{" "}
//         </p>{" "}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React{" "}
//         </a>{" "}
//       </header>{" "}
//     </div>
//   );
//  }

// export default App;