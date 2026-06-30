import { useState } from 'react';
import { Card, Divider, Select } from 'antd';
import arrowIcon from 'C:/Users/bayan/vuedale_training/frontend_mentor_projects/age-calculator-app-main/assets/images/icon-arrow.svg';

function App() {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [result, setResult] = useState({ years: '--', months: '--', days: '--' });

  const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
  const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
  
  const currentYear = new Date().getFullYear();
  const yearsArray = Array.from({ length: 100 }, (_, i) => currentYear - i);

  function calculateAge() {
    if (!day || !month || !year) {
      alert("Please fill in all fields!");
      return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      ageDays += previousMonth.getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setResult({ years: ageYears, months: ageMonths, days: ageDays });
  }

  return (
    <div className='card-container'>
      <Card className='card'> 
        <div className='input-container'>
      
          
          <div className='label-container'>
            <label for="daySelect">Day</label>
            <Select
              id="daySelect"
              placeholder="DD"
              onChange={(value) => setDay(value)}
              options={daysArray.map(d => ({ value: d, label: d.toString().padStart(2, '0') }))}
            />
          </div>
          
          
          <div className='label-container'>
            <label for="monthSelect">Month</label>
            <Select
              id="monthSelect"
              placeholder="MM"
              onChange={(value) => setMonth(value)}
              options={monthsArray.map(m => ({ value: m, label: m.toString().padStart(2, '0') }))}
            />
          </div>
         
          
          <div className='label-container'>
            <label for="yearSelect">Year</label>
            <Select
              id="yearSelect"
              placeholder="YYYY"
              showSearch 
              onChange={(value) => setYear(value)}
              options={yearsArray.map(y => ({ value: y, label: y.toString() }))}
            />
          </div>
          
        </div>

        <div className='circle'>
          <img className='arrow' alt="calculate button" src={arrowIcon} onClick={calculateAge}/>
        </div>

        <Divider/>

        <div className='age-display'>
          <div className='title'><span>{result.years} </span>years</div>
          <div className='title'><span>{result.months} </span>months</div>
          <div className='title'><span>{result.days} </span>days</div>
        </div>
      </Card>
    </div>
  );
}

export default App;