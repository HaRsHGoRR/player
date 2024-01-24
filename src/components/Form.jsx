import React, { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    FirstName: '',
    Sem: 0,
    Div: '',
    Gender: '',
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={headerStyle}>Student FORM</h1>
        <br></br>

        <label style={labelStyle}>
          First Name:
          <input type="text" name="FirstName" value={form.FirstName} onChange={handleInputChange} style={inputStyle} />
        </label>
<br></br>
        <label style={labelStyle}>
          Sem:
          <input type="number" name="Sem" value={form.Sem} onChange={handleInputChange} style={inputStyle} />
        </label>


<br></br>
        <label style={labelStyle}>
          Division:
          <input type="text" name="Div" value={form.Div} onChange={handleInputChange} style={inputStyle} />
        </label>
<br></br>
        <div style={labelStyle}>
          Gender:
          <label style={radioLabelStyle}>
            Male
            <input
              type="radio"
              name="Gender"
              value="Male"
              checked={form.Gender === 'Male'}
              onChange={handleInputChange}
              style={radioStyle}
            />
          </label>
          <label style={radioLabelStyle}>
            Female
            <input
              type="radio"
              name="Gender"
              value="Female"
              checked={form.Gender === 'Female'}
              onChange={handleInputChange}
              style={radioStyle}
            />
          </label>
        </div>
<br></br>
        <h2 style={resultStyle}>
          Your Name: {form.FirstName} {form.Sem} {form.Div} {form.Gender}
        </h2>
<br></br>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </>
  );
}

const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  textAlign: 'center',
  color: '#333',
};

const labelStyle = {
  display: 'block',
  margin: '15px 0',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const radioLabelStyle = {
  margin: '0 10px',
};

const radioStyle = {
  margin: '0 5px',
};

const resultStyle = {
  marginTop: '20px',
  color: '#333',
};

const buttonStyle = {
    width: '150px',
    height: '76px',
    lineHeight: '78px',
    fontSize: '20px',
    fontFamily: 'Bebas Neue, sans-serif',
    background: 'linear-gradient(45deg, transparent 5%, #FF013C 5%)',
    border: '0',
    color: '#fff',
    letterSpacing: '3px',
    boxShadow: '6px 0px 0px #00E6F6',
    outline: 'transparent',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
  };
  
export default Form;
