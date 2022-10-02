import { Select } from 'antd';
import React, { useState } from 'react';
import ProcessData from '../functions/preproscss';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { dishesNameChange } from '../store/reducers/dishesNameReducer';



const dishesSelect  = ProcessData.MRD 
const { Option } = Select;

const AppSelectDishes = () => {

  const meal = useSelector((state : RootState)=> state.meal.value)
  const restarurant = useSelector((state:RootState)=>state.restaurant.value)
  const dish =  useSelector((state:RootState)=>state.dishesName.value)
  // const [dishes, setDishes] = useState(dishesSelect[meal][restarurant][0]);
  const dispatch = useDispatch();

  

  const onDishesChange = (value) => {
    dispatch(dishesNameChange(value))
  };


  return (
    <>
      <Select
        style={{
          width: 250,
        }}
        defaultValue = {dish}
        onChange={onDishesChange}
      >
        {dishesSelect[meal][restarurant].map((city) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};

export { AppSelectDishes};