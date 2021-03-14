import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Tim', age: 31 },
            { name: 'Beth', age: 28 },
            { name: 'Josh', age: 31 }
        ],
        otherState: 'some  other value'
    };

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // Don't do this: this.state.persons[0].name = 'Timothy';
        this.setState({
            persons: [
                { name: newName, age: 31 },
                { name: 'Beth', age: 28 },
                { name: 'Josh', age: 30 }
            ]
        });
    };

    nameChangeHandlder = (event) => {
        this.setState({
            persons: [
                { name: 'Tim', age: 31 },
                { name: event.target.value, age: 28 },
                { name: 'Josh', age: 30 }
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Timothy!!')}
                >
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Tim!')}
                    changed={this.nameChangeHandlder}
                >
                    My Hobbies: creating mosaic art
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
    // return React.createElement(
    //     'div',
    //     { className: 'App' },
    //     React.createElement('h1', null, 'Does this work now?')
    // );
}


export default App;
