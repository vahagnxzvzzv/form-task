import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import DatePicker from 'react-date-picker';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Checkbox from './components/Checkbox';

function App() {
  const [value, onChange] = useState(new Date());
  const [phoneValue, setPhoneValue] = useState('')
  const [nameField, setNameField] = useState('');
  const [lastNameField, setLastNameField] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const nameFieldRef = useRef();

  

  function formSubmitHandler(event) {
    event.preventDefault();
    if(nameField.length  < 3 && lastNameField.length < 3) {
    setAlertMessage(`Name field must be more than 2 charcaters`)
    } 
  }

  let nameFieldClasses = 'nameField'

  if(alertMessage !== '') {
    nameFieldClasses = 'nameFieldinvalid'
  }

  let lastNameFieldClasses = 'lastNameField'

  if(alertMessage !== '') {
    lastNameFieldClasses = 'lastNameFieldinvalid'
  }

  

  return (
    <form onSubmit={formSubmitHandler} className='App'>
      <div className='form'>
        <div>
          <h1 className='login-text'>Form Task</h1>
        </div>
        <input onChange={(event) => {
          setNameField(event.target.value)
        }} value={nameField} className={nameFieldClasses} type="text" name='nameField' id='nameField' placeholder='Enter your name...' required />
        {alertMessage !== '' && <p className='alert-message'>{alertMessage}</p>}
        <input onChange={(event) => {
          setLastNameField(event.target.value)
        }} value={lastNameField} className={lastNameFieldClasses} type="text" name='lastNameField' id='lastNameField' placeholder='Enter your last name...' required />
        {alertMessage !== '' && <p className='alert-message'>{alertMessage}</p>}
        <input className='lastNameField' type="email" name='emailField' id='emailField' placeholder='Enter your email...' required />
        <div>
          <DatePicker className='date-field' onChange={onChange} value={value} />
        </div>
        <div>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneValue}
            onChange={setPhoneValue}
            className='lastNameField'
          />
        </div>
        <div>
          <Checkbox label="Basketball" />
          <Checkbox label="Football" />
          <Checkbox label="Valleyball" />
        </div>
        <div>
          <button className='submit-button'>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default App;

// import { useState } from 'react';

// export default function App() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setMessage(`Hello ${firstName} ${lastName}!`);
//     setFirstName('');
//     setLastName('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="firstName"
//         name="firstName"
//         value={firstName}
//         placeholder="First Name"
//         onChange={(event) =>
//           setFirstName(event.target.value)
//         }
//       />

//       <br />
//       <br />

//       <input
//         type="text"
//         id="lastName"
//         name="lastName"
//         value={lastName}
//         placeholder="Last Name"
//         onChange={(event) => {
//           setLastName(event.target.value);
//         }}
//       />

//       <br />
//       <br />

//       <button type="submit">Submit</button>

//       <br />
//       <br />

//       <h2>{message}</h2>
//     </form>
//   );
// }