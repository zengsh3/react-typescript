import React from 'react'
import { Button,Select, InputNumber, Steps, Descriptions, Space,Table } from 'antd'
import {
    PlusCircleTwoTone,
    MinusCircleTwoTone
  } from '@ant-design/icons';





function Test() {
    
    const user = {
        name:'SHENHUI'
    }
    const say = (str: string) => { 
        console.log(str)
    }
    say('print the result in console')
    const h1 = <h1>Hello world! &nbsp;&nbsp;&nbsp;&nbsp;  {user.name} !!</h1>
    const onChange = (value) => {
        console.log('changed', value);
      };

      const { Option } = Select;

      const onChange2 = (value: string) => {
        console.log(`selected ${value}`);
      };
      
      const onSearch2 = (value: string) => {
        console.log('search:', value);
      };
    const { Step } = Steps;
    const columns = [
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
        {
          title: 'Price',
          dataIndex: 'Price',
          key: 'Price',
        },
        {
          title: 'Action',
          key: 'Action',
          render: (_, record) => (
            <Space size="middle">
              <PlusCircleTwoTone />
              <MinusCircleTwoTone />
            </Space>
          ),
        },
      ];
      const data = [
        {
          key: '1',
          Dish: 'A',
          Number: 2,
          Price: '$50',
        },
        {
          key: '2',
          Dish: 'B',
          Number: 2,
          Price: '$50',
        },
        {
          key: '3',
          Dish: 'C',
          Number: 1,
          Price: '$50',
        },
        {
            key: '1',
            Dish: 'D',
            Number: 2,
            Price: '$50',
          },
          {
            key: '2',
            Dish: 'E',
            Number: 2,
            Price: '$50',
          },
      ];
    return (
        <div>
            {h1}
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange2}
                onSearch={onSearch2}
                filterOption={(input, option) =>
                (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>

            <br />
            <Button type="primary">previous</Button>
            <Button>next</Button>
            <br />
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
            <Space>
                <PlusCircleTwoTone />
                <MinusCircleTwoTone />
            </Space>
            <br />

            <Steps current={0}>
                <Step title="Step1" description="Please select a meal and enter the number of people" />
                <Step title="Step2" description="Please select the restaurant." />
                <Step title="Step3" description="Please select a dish and enter the number of servings." />
                <Step title="review" description="Review your choice." />
            </Steps>

            <Descriptions title="Order Info">
                <Descriptions.Item label="Meal">Lunch</Descriptions.Item>
                <br />
                <Descriptions.Item label="No. of people">3</Descriptions.Item>
                <br />
                <Descriptions.Item label="Restaurant">Restaurant &nbsp; A</Descriptions.Item>
                <br />
                <Descriptions.Item label="Dishes">
                     <Table columns={columns} dataSource={data} footer={() => 'Total'} pagination={false} />
                </Descriptions.Item>
            </Descriptions>


        </div>
    )
}

export default Test