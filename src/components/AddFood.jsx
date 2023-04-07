import { Card, Row, Col, Divider, Input, Button } from "antd";
import React, { useState } from 'react';


const AddFood = ({addNewFood , setView}) => {

    const [newFood, setNewFood] = useState({
        name: '',
        image: '',
        calories: '',
        servings: '',
      });
      const handleInput = (e) => {
        const { name, value } = e.target;
        setNewFood((prevFood) => ({ ...prevFood, [name]: value }));
      };

    return (
        <div> 
            <Divider>Add Food Entry</Divider>
                <span>Name</span> <Input name="name" type="text" value={newFood.name}  onChange={handleInput}/>
                <span>Image</span> <Input name="image" type="text" value={newFood.image} onChange={handleInput}/>
                <span>Calories</span> <Input name="calories" type="text" value={newFood.calories} onChange={handleInput}/>
                <span> Servings</span>  <Input name="servings" type="text"  value={newFood.servings} onChange={handleInput}/>
                <Button onClick={() => addNewFood(newFood)} >Add Food</Button>
                <Button onClick={() => setView(false)} >Hide Form</Button>
        </div>

    )
}

export default AddFood