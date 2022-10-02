import { Descriptions, Table } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const reviewColumns = [
  {
    title: 'Dish',
    dataIndex: 'Dish',
    key: 'Dish',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Number',
    dataIndex: 'Number',
    key: 'Number',
  },
  
];
const reviewData = [

  {
    key: '3',
    Dish: 'C',
    Number: 1,
  },
];

const AppDescriptions = () => {
  const meal = useSelector((state : RootState)=> state.meal.value)
  const people = useSelector((state : RootState)=> state.people.value)
  const restaurant = useSelector((state : RootState)=> state.restaurant.value)
  
  return (
     <Descriptions title="Review">
      <Descriptions.Item label="Meal"  >{meal}</Descriptions.Item>
      <br /><br />
      <Descriptions.Item label="No. of people">{people}</Descriptions.Item>
      <br /><br />
      <Descriptions.Item label="Restaurant">{restaurant}</Descriptions.Item>
      <br /><br />
      <Descriptions.Item label="Dishes">
          <Table columns={reviewColumns} dataSource={reviewData} footer={() => 'Total'} pagination={false} />
      </Descriptions.Item>
    </Descriptions>
  );
}
export default AppDescriptions;