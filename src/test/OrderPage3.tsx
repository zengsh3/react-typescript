import { Button, InputNumber, Space, Steps } from 'antd'
import AppSelectMeal from '../components/CustomSelect';
import AppSelectRestaurant from '../components/CustomSelect2';
// import AppSteps from '../components/CustomSteps';
import AppDescriptions from '../components/CustomDescriptions';
import AppTable from '../components/CustomTable';
import ProcessData from '../functions/preproscss'
import './OrderPage.css'
import { CSSProperties, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { changeStep} from  '../store/reducers/stepReducer'




function Test() {
  
  const step = useSelector((state : RootState)=> state.step.value)
  const dispatch = useDispatch();
  
  const [previousStyle, SetPreviousStyle] = useState<CSSProperties>({float:"left", margin:"0 0 0 200px", display:'none'})
  const [nextStyle, SetNextStyle] = useState<CSSProperties>({float:"right",margin:"0 500px 0 0",display:"block"})
  const [submitStyle, SetSubmitStyle] = useState<CSSProperties>({float:"right",margin:"0 500px 0 0",display:"none"})
  const [clsListStep1, SetClsListStep1] = useState(["step1" ])
  const [clsListStep2, SetClsListStep2] = useState(["step2", "hide"])
  const [clsListStep3, SetClsListStep3] = useState(["step3", "hide"])
  const [clsListStep4, SetClsListStep4] = useState(["review", "hide"])


  function change(step){
    if (step===0) {
      SetPreviousStyle({float:"left", margin:"0 0 0 200px", display:'none'})
      SetNextStyle({float:"right",margin:"0 500px 0 0",display:"block"})
      SetSubmitStyle({float:"right",margin:"0 500px 0 0",display:"none"})
      SetClsListStep1(["step1"])
      SetClsListStep2(["step2", "hide"])
      SetClsListStep3(["step3", "hide"])
      SetClsListStep4(["review", "hide"])
    }
    else if (step===1){
      SetPreviousStyle({float:"left", margin:"0 0 0 200px", display:'block'})
      SetNextStyle({float:"right",margin:"0 500px 0 0",display:"block"})
      SetSubmitStyle({float:"right",margin:"0 500px 0 0",display:"none"})
        SetClsListStep1(["step1","hide"])
        SetClsListStep2(["step2" ])
        SetClsListStep3(["step3", "hide"])
        SetClsListStep4(["review","hide"])
      }
    else if (step===2){
      SetPreviousStyle({float:"left", margin:"0 0 0 200px", display:'block'})
      SetNextStyle({float:"right",margin:"0 500px 0 0",display:"block"})
      SetSubmitStyle({float:"right",margin:"0 500px 0 0",display:"none"})
      SetClsListStep1(["step1","hide"])
      SetClsListStep2(["step2", "hide"])
      SetClsListStep3(["step3"])
      SetClsListStep4(["review","hide"])
      }
    else if (step===3) {
      SetPreviousStyle({float:"left", margin:"0 0 0 200px", display:'block'})
      SetNextStyle({float:"right",margin:"0 500px 0 0",display:"none"})
      SetSubmitStyle({float:"right",margin:"0 500px 0 0",display:"block"})
      SetClsListStep1(["step1","hide"])
      SetClsListStep2(["step2", "hide"])
      SetClsListStep3(["step3", "hide"])
      SetClsListStep4(["review"])
    }
    console.log("step:",step)
  }

  const submit = () => {
    SetSubmitStyle({float:"right",margin:"0 500px 0 0",display:"none"})
    console.log('print the finial order')
  }

  const next = (step) => {
    if (step<3) {let result=step+1;
      change(result);
      dispatch(changeStep(result))}
  }

  const previous = (step) => {
    if (step>0) {let result = step-1;
      change(result);
      dispatch(changeStep(result))}
  }

  const changeS = (value:number) => {
    if (value < step) {
      change(value);
      dispatch(changeStep(value))
    }
  }
  


  const onChangePeople = (value) => {
    console.log('people changed', value);
  };
  const { Step } = Steps;

  return (
      <div>
        <div className='navigation'>
        <Steps className="navigation" current={step}>
          <Step title="Step1" onClick={()=>changeS(0)}/>
          <Step title="Step2" onClick={()=>changeS(1)}/>
          <Step title="Step3" onClick={()=>changeS(2)}/>
          <Step title="review" onClick={()=>changeS(3)}/>
        </Steps>
            <br />
        </div>    
        <div className='steps'>

          <div className={clsListStep1.join(" ")}>
            <div className='select'>
              <p className='mealDescription'>Please select a meal</p>
            <div className='select'>
             <AppSelectMeal />
            </div>
          </div>

            <p className='peopleSet'>Please enter the number of people</p>
            <InputNumber min={1} max={10} defaultValue={1} onChange={onChangePeople} />
            <br />
          </div>
          
          <div className={clsListStep2.join(" ")}>
          <p>Please select a restaurant</p>
            <AppSelectRestaurant />
            <br />
          </div>

          <div className={clsListStep3.join(" ")}>
            <AppTable />
            <br />
          </div>

          <div className={clsListStep4.join(" ")}>
            <AppDescriptions />    
            <br />     
          </div>

        </div>
        <br /><br />
        <div className="changeSteps">
          <Button id="previous" style={previousStyle} onClick={()=>previous(step)} >previous</Button>
          <Button id="next" style={nextStyle} onClick={()=>next(step)}>next</Button>
          <Button type="primary" style={submitStyle} onClick={submit} >submit</Button>
        </div>
      </div>
  )
}

export default Test