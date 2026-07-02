import { useState } from 'react'
import { Form, Input, Button, Grid, Row, Col, Typography, Result } from 'antd';

import bgCardFront from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/bg-card-front.png';
import bgCardBack from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/bg-card-back.png';
import bgMainDesktop from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/bg-main-desktop.png';
import bgMainMobile from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/bg-main-mobile.png';
import cardLogo from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/card-logo.svg';
import iconComplete from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/interactive-card-details-form-main/images/icon-complete.svg';



function App() {


  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  const numberValue = Form.useWatch('number', form);
  const expValue = Form.useWatch('expDate', form);
  const cvcValue = Form.useWatch('cvc', form);

  const [isSubmitted, setIsSubmitted] = useState(false);


  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9A-Z]/gi, '');
    const matches = v.match(/\w{1,4}/g);
    const match = (matches && matches.join(' ')) || '';
    return match.toUpperCase();
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    setIsSubmitted(true);
    /*
    const formContainer = document.querySelector('.form');
      formContainer.innerHTML = '<Result status="success" title="THANK YOU!" icon={iconComplete} subTitle="We have successfully added your card details" extra={[<Button key="continue">Continue</Button>]}/>';
      */
  };

  const handleContinue = () => {
    form.resetFields();
    setIsSubmitted(false);
  }

  return (
    <>
      <div className='container'>
        <img alt="bg-dektop" id="bg-desktop" src={bgMainDesktop} />

        <div className='card-front-container'>

          <div className='card-front-content'>
            <div className='upper-content'>
              <img alt="card-logo" id="card-logo" src={cardLogo} />
              <Typography>
                <div className='card-number'>{numberValue || '0000 0000 0000 0000'}</div>
              </Typography>
            </div>

            <div className='lower-content'>
              <Typography>
                <div className='card-holder-name'>{nameValue || 'JANE APPLESEED'}</div>
                <div className='card-exp-date'> {expValue} </div>
              </Typography>
            </div>
          </div>
        </div>

        <div className='card-back-container'>
          <div className='card-back-content'>
            <Typography>
              <div className='card-cvc'>{cvcValue || '000'}</div>
            </Typography>
          </div>
        </div>

        {!isSubmitted ? (
          <Form form={form} className='form' layout="vertical" requiredMark={false} onFinish={onFinish}>

            <Form.Item
              label="CARDHOLDER NAME"
              name="name"
              rules={[{ required: true, message: "Can't be blank" }]}>
              <Input placeholder="eg. Jane Appleseed" />
            </Form.Item>

            <Form.Item
              label="CARD NUMBER"
              name="number"
              rules={[
                { required: true, message: "Can't be blank" },
                {
                  pattern: /^[0-9 ]+$/,
                  message: "Wrong format, numbers only"
                },
                { min: 19, message: "Must be a complete card number" }
              ]}>
              <Input
                type={Number}
                placeholder="eg. 1234 5678 9123 0000"
                maxLength={19}
                onChange={(e) => {

                  const formatted = formatCardNumber(e.target.value);
                  form.setFieldsValue({ number: formatted });
                }}
              />
            </Form.Item>

            <div className='form-row' style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>

              <div className='exp-date-group' style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <Form.Item
                  label="EXP. DATE (MM/YY)"
                  name="month"
                  rules={[
                    { required: true, message: "Can't be blank" },
                    { pattern: /^(0[1-9]|1[0-2])$/, message: "Invalid Month" }
                  ]}
                >
                  <Input placeholder='MM' style={{ /*width: '70px'*/ }} maxLength={2} />
                </Form.Item>

                <Form.Item
                  label=" "
                  name="year"
                  rules={[{ required: true, message: "Can't be blank" }]}
                >
                  <Input placeholder='YY' style={{ /*width: '70px'*/ }} maxLength={2} />
                </Form.Item>
              </div>

              <Form.Item
                label="CVC"
                name="cvc"
                style={{ flexGrow: 1 }}
                rules={[{ required: true, message: "Can't be blank" }]}
              >
                <Input placeholder='e.g. 123' maxLength={3} />
              </Form.Item>
            </div>

            <Form.Item style={{ marginTop: '24px' }}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                Confirm
              </Button>
            </Form.Item>
          </Form>
        ) : (

          <div className="success-container" style={{ width: '380px', textAlign: 'center' }}>
            <Result
              icon={<img src={iconComplete} alt="Complete" style={{ marginBottom: '16px' }} />}
              title={<span /*style={{ letterSpacing: '3px', color: '#21092F' }}*/>THANK YOU!</span>}
              subTitle={<span /*style={{ color: '#8A8A8A' }}*/>We've added your card details</span>}
              extra={[
                <Button type="primary" key="continue" onClick={handleContinue} style={{ width: '100%' }}>
                  Continue
                </Button>
              ]}
            />
          </div>
        )}
      </div>


    </>
  );
}

export default App
