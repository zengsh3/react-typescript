import { Steps } from 'antd';
import React from 'react';



const { Step } = Steps;


const AppSteps = () => (
  <Steps className="navigation" current={3}>
    <Step title="Step1" />
    <Step title="Step2" />
    <Step title="Step3" />
    <Step title="review" />
  </Steps>
);

export default AppSteps;