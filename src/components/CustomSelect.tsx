import { Select, Form } from 'antd';
import React, { useState } from 'react';
import ProcessData from '../functions/preproscss'
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { mealChange } from '../store/reducers/mealReducer';
import { restaurantChange } from '../store/reducers/restaurantReducer';
import { dishesNameChange } from '../store/reducers/dishesNameReducer';


const meals= ["breakfast", "lunch", "dinner"];
const restaurantSelect  = ProcessData.MR;
const dishesSelect  = ProcessData.MRD;


const { Option } = Select;

const AppSelectMeal = () => {
  const meal = useSelector((state : RootState)=> state.meal.value)
  const restaurant = useSelector((state : RootState)=> state.restaurant.value)
  const dispatch = useDispatch();

  const handlemealChange = (value) => {
    dispatch(mealChange(value))
    dispatch(restaurantChange(restaurantSelect[meal][0]))
    dispatch(dishesNameChange(dishesSelect[meal][restaurant][0]))
  };

  return (
    <>
      <Select
        defaultValue={meals[0]}
        style={{
          width: 120,
        }}
        onChange={handlemealChange}
      >
        {meals.map((meal) => (
          <Option key={meal}>{meal}</Option>
        ))}
      </Select>
    </>
  );
};

export default AppSelectMeal;