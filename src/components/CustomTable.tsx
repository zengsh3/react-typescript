import { Space, Table, InputNumber } from 'antd';
import React, {useState } from 'react';
import {  PlusCircleTwoTone,  MinusCircleTwoTone} from '@ant-design/icons';
import { AppSelectDishes} from '../components/CustomSelect3';


const AppTable = () => { 
  
  
  const onChangeServings = (value) => {
    console.log('people changed', value);
  };
  
  const [count, setCount] = useState(1)

  const onDeleteDishes = (key) =>{
    const newData = orderData.filter(item => item.key !== key);
    setOrderData(newData);
  }


  function callback(result){
    const newDate = {
      key:  result,
      Dish: <AppSelectDishes />,
      Number: <InputNumber min={1} max={100} defaultValue={1} onChange={onChangeServings} />,
    }
    setOrderData([...orderData, newDate])
    setCount(count+1)
  }

  const onAddDishes = (count) =>{
    setTimeout(()=>{
      let result=count+1
      callback(result)
    }, 100)
  }
  
  const orderColumns = [
    {
      title: 'Please select a Dish',
      dataIndex: 'Dish',
      key: 'Dish',
      // render: (text) => <a>{text}</a>,
    },
    {
      title: 'Please enter the number of servings',
      dataIndex: 'Number',
      key: 'Number',
    },
    {
      title: 'Delete',
      key: 'Action',
      render: (_, record) => (
        <Space size="middle">
          <MinusCircleTwoTone style={{fontSize:"200%"}} onClick={()=>onDeleteDishes(record.key)}/>
        </Space>
      ),
    },
    
  ];
  const[ orderData, setOrderData] = useState([
    {
      key: count,
      Dish: <AppSelectDishes />,
      Number: <InputNumber min={1} max={100} defaultValue={3} onChange={onChangeServings}/>,
    },
  ])
  
  return(
    
    <>
      <Table columns={orderColumns} dataSource={orderData} pagination={false} style={{alignContent:"center"}}/>
      <Space>
        <PlusCircleTwoTone style={{fontSize:'250%', margin:"50px 0 0 100px"}} onClick={()=>{onAddDishes(count)}}/>
      </Space>
    </>
  );
}

export default AppTable;