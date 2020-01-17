import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

export default () =>{
  const [selectedDate, setSelectedDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [age, setAge] = useState('');
  const [nombre, setNombre] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [apellido, setApellido] = useState('');
  const [apellidoError, setApellidoError] = useState('');
  const [correo, setCorreo] = useState('');
  const [correoError, setCorreoError] = useState('');
  const handleDateChange = date => {
    if (date !== null) {
      setAge(moment().diff(date, 'years'));
      setSelectedDate(date);
    }
  }
  const handleClick = () => {
    if(nombre === '') {
      setNombreError('Debe ingresar sus nombres');
    } else if (!(/^[^\s]+\s[^\s]+$/.test(nombre))) { 
      setNombreError('Debe ingresar dos nombres');
    } else {
      setNombreError('');
    }
    if(selectedDate === '') {
      setDateError('Debe ingresar su fecha de nacimiento');
    } else {
      setDateError('');
    }
    if(apellido === '') {
      setApellidoError('Debe ingresar sus apellidos');
    } else if (!(/^[^\s]+\s[^\s]+$/.test(apellido))) { 
      setApellidoError('Debe ingresar dos apellidos');
    } else {
      setApellidoError('');
    }
    if(correo === '') {
      setCorreoError('Debe ingresar su correo');
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo))) {
      setCorreoError('Debe ingresar un correo válido');
    } else {
      setCorreoError('');
    }

  }
  return (
    <div className="form">
      <div className="input-group">
        <input type="text" placeholder="Nombres" onChange={e => setNombre(e.target.value)}></input>
        <div style={{display: 'inline-block'}}>
          <Datepicker
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="Fecha de nacimiento"
            maxDate= {new Date()} />
        {age !== '' && 
        <div className="edad"><span>Tu edad es: {age} años</span></div>
        }
        </div>
      </div>
      <div className="input-group">
        <input type="text" placeholder="Apellidos"  onChange={e => setApellido(e.target.value)}></input>
        <input type="text" placeholder="Correo"  onChange={e => setCorreo(e.target.value)}></input>
      </div>
      <div style={{marginTop: '5px'}}>
      {nombreError !== '' && 
        <div className="error">{nombreError}</div>
      }
      {dateError !== '' && 
        <div className="error">{dateError}</div>
      }
      {apellidoError !== '' && 
        <div className="error">{apellidoError}</div>
      }
      {correoError !== '' && 
        <div className="error">{correoError}</div>
      }
      </div>
      <div style={{marginTop: '25px'}}>
        <div className="button validate" onClick={handleClick}>Validar</div>
      </div>
    </div>
  )
}