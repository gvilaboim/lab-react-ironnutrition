import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from "antd";

const SearchBar = ({newSearch}) => {
    const handleInput = (e) => {
        const { name, value } = e.target;
       newSearch(value);
      };
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
     <Input name="search" type='text' onChange={handleInput}></Input>
    </div>
  )
}

export default SearchBar