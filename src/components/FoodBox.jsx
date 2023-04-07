import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";


const FoodBox = ({food , deleteFood}) => {
  return (
    <Col>
        <Card title={food.name}         style={{ width: 230, height: 300, margin: 10 }}>
         <img src={food.image} width={70}></img>
          <p> Calories: {food.calories} Kcal </p>
          <p> Servings: {food.servings} </p>   
          <p><b>  Total Calories:  {food.calories} Kcal</b> </p>  
          <Button onClick={ () => deleteFood(food.name)} >Delete</Button>
        </Card>
        </Col>

  )
}

export default FoodBox