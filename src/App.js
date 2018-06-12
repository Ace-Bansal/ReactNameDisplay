import React, { Component } from 'react';
import './App.css';
import Person from "./Person/person.js"

class App extends Component {

  state = {
    persons: [
      {
        name: "Ekansh",
        age: "21",
        id: "1"
      },
      {
        name: "Bansal",
        age: "20",
        id: "2"
      }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    let persons = [...this.state.persons];
    let person = persons.find((p) => {
      return p.id === id
    })
    person.name = event.target.value;
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    let showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  }

  deleteNameHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  ageChangeHandler = (event, id) => {
    let persons = [...this.state.persons];
    let personIndex = persons.findIndex((person) => {
      return person.id === id
    })
    persons[personIndex].age = event.target.value;
    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        {
        this.state.persons.map((person, index) => {
          return <Person
            name = {person.name}
            age = {person.age}
            key = {person.id}
            clicked = {() => this.deleteNameHandler(index)}
            nameChanged = {(event) => this.nameChangeHandler(event, person.id) }
            ageChanged = {(event) => this.ageChangeHandler(event, person.id)}
            />
        })}
        </div>
      )
      }
    return (
      <div className="App">
        <h1>React Prac</h1>
        <button onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}

export default App;
