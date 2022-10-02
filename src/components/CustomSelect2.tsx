import { Select, Form } from 'antd';
import React, { useState } from 'react';
import ProcessData from '../functions/preproscss'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { restaurantChange } from '../store/reducers/restaurantReducer';
import { dishesNameChange } from '../store/reducers/dishesNameReducer';

const restaurantSelect  = ProcessData.MR;
const dishesSelect  = ProcessData.MRD;
const { Option } = Select;

const AppSelectMeal = () => {
  const meal = useSelector((state : RootState)=> state.meal.value)
  const restaurant = useSelector((state : RootState)=> state.restaurant.value)
  // const [restaurant, setRestaurant] = useState(restaurantSelect[meal][0]);
  const dispatch = useDispatch();

  const onRestaurantChange = (value) => {
    // setRestaurant(value);
    dispatch(restaurantChange(value));
    dispatch(dishesNameChange(dishesSelect[meal][restaurant][0]));
  };


  return (
    <>
      <Select
        style={{
          width: 250,
        }}
        defaultValue={restaurant}
        onChange={onRestaurantChange}
      >
        {restaurantSelect[meal].map((city) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  );
};

export default AppSelectMeal;