import { Button, InputNumber, Space } from 'antd'
import {   PlusCircleTwoTone  } from '@ant-design/icons';
import AppSelectMeal from '../components/CustomSelect';
import AppSelectRestaurant from '../components/CustomSelect2';
import AppSteps from '../components/CustomSteps';
import AppDescriptions from '../components/CustomDescriptions';
import AppTable from '../components/CustomTable';



function Test() {


    const onChangePeople = (value) => {
      console.log('people changed', value);
    };

    return (
        <div>
            <AppSteps  />


            <div className='steps'>

              <div className='step1'>
                <p>Please select a meal</p>
                <AppSelectMeal />
                <p>Please enter the number of people</p>
                <InputNumber min={1} max={10} defaultValue={3} onChange={onChangePeople} />
              </div>
              
              <div className='step2'>
              <p>Please select a restaurant</p>
                <AppSelectRestaurant />
              </div>

              <div className='step3'>
                <AppTable />
                <Space>
                  <PlusCircleTwoTone />
                </Space>
              </div>

              <div className='review'>
                <AppDescriptions />         
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