import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import {debounce} from 'lodash';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  search = debounce(value => {
    this.setState({searchField: value});
  }, 300)

  onSearchChange = event => {
    this.search(event.target.value);
  };

  filterMonster = () => {
    const {monsters, searchField} = this.state;
    return monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const filteredMonsters = this.filterMonster();

    return (
      <div className='App'>
        <h1>Monster Finder</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

