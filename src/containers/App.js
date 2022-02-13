import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// Part of react; no functions needed
	// fetch is a window's method here to make request
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			return response.json(); //convert the response to a json
		}).then(users => {
			this.setState({ robots: users }); // setting state
		})
	}

	// value of this refers to the input in SearchBox.js not App. 
	// Its called in input (parent) within SearchBox.js. - Problem with function declaration
	// So, use arrow function. 
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
	    const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ? 
			<h1>Loading</h1>
		 :
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
	}
}

export default App;