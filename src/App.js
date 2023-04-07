import logo from './logo.svg';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';
import foodsJson from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');
  const [view, setView] = useState(false);

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
  };
  const newSearch = (searchText) => {
    setSearch(searchText);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteFood = (name) => {
    const updatedFoods = foods.filter((food) => {
      return food.name !== name;
    });
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      {view === false ? (
<Button onClick={() => setView(true)}> Add Food</Button>
): 
<AddFood  setView = {setView} addNewFood={addNewFood} />

}

      <SearchBar newSearch={newSearch} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.length === 0 ? (
          <div className='empty-results'>
            <p>Oops! No more foods to show</p>
            <img alt="no-results" src="/empty-set.png" />
          </div>
        ) : (
          filteredFoods.map((food) => {
            return <FoodBox  deleteFood = {deleteFood} food={food} />
          })
        )}
        {

        }
      </Row>
    </div>
  );
}

export default App;
