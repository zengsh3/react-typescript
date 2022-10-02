import React from 'react'
import { Button,Select, InputNumber, Steps, Descriptions, Space,Table } from 'antd'
import {
    PlusCircleTwoTone,
    MinusCircleTwoTone
  } from '@ant-design/icons';




function Test() {
    const { Step } = Steps;
    const { Option } = Select;

    const onChangeMeal = (value: string) => {
      console.log(`selected ${value}`);
    };

    const onSearchMeal = (value: string) => {
      console.log('search:', value);
    };

    const onChangePeople = (value) => {
      console.log('changed', value);
    };

    const orderColumns = [
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
        title: 'Action',
        key: 'Action',
        render: (_, record) => (
          <Space size="middle">
            <MinusCircleTwoTone />
          </Space>
        ),
      },
      
    ];
    const orderData = [
      
    ];

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
    
    return (
        <div>
            <Steps className="navigation" current={0}>
                <Step title="Step1" />
                <Step title="Step2" />
                <Step title="Step3" />
                <Step title="review" />
            </Steps>

            <div className='steps'>

              <div className='step1'>
                <p>Please select a meal</p>
                <Select
                  showSearch
                  placeholder="---"
                  optionFilterProp="children"
                  onChange={onChangeMeal}
                  onSearch={onSearchMeal}
                  filterOption={(input, option) =>
                  (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
                <p>Please enter the number of people</p>
                <InputNumber min={1} max={10} defaultValue={3} onChange={onChangePeople} />
              </div>
              
              <div className='step2'>
              <p>Please select a restaurant</p>
                <Select
                  showSearch
                  placeholder="---"
                  optionFilterProp="children"
                  onChange={onChangeMeal}
                  onSearch={onSearchMeal}
                  filterOption={(input, option) =>
                  (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
              </div>

              <div className='step3'>
                 <Table columns={orderColumns} dataSource={orderData} pagination={false} />
              <Space>
                <PlusCircleTwoTone />
              </Space>
              </div>

              <div className='review'>
                <Descriptions title="Review">
                    <Descriptions.Item label="Meal">Lunch</Descriptions.Item>
                    <Descriptions.Item label="No. of people">3</Descriptions.Item>
                    <Descriptions.Item label="Restaurant">Restaurant &nbsp; A</Descriptions.Item>
                    <Descriptions.Item label="Dishes">
                        <Table columns={reviewColumns} dataSource={reviewData} footer={() => 'Total'} pagination={false} />
                    </Descriptions.Item>
                </Descriptions>
              </div>
            </div>

            <div>
            <Button>previous</Button>
            <Button>next</Button>
            <Button type="primary">submit</Button>
            </div>


        </div>
    )
}

export default Test