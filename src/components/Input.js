import React, { useRef, useState } from 'react';

export function Input(props) {
  const textInput = useRef(null);
  const [value, setValue] = useState('');

  function validateInput(val) {
    switch (props.validationType) {
      case 'emailOrPhone': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9]{7,}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
      }
      case 'password': {
        /*
        Пояснение:
        (?=.*[0-9]) - строка содержит хотя бы одно число;
        (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
        (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
        (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
        [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.
        https://ru.stackoverflow.com/questions/533675/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BE%D0%BB%D1%8F-%D0%BE%D1%82-6-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D1%81-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC-%D1%86%D0%B8%D1%84%D1%80-%D1%81%D0%BF%D0%B5%D1%86-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE
        */
        const passwordregex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        return passwordregex.test(val)
      }
      case 'birthdate': {
        const birthdateRegex = /^\d{2}-\d{2}-\d{2}$/;
        return birthdateRegex.test(val);
      }
      case 'country': {
        return val.length > 0;
      }
      case 'address': {
        return val.length > 0;
      }
      default:
        return true;
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    setValue(value);
    if (validateInput(value)) {
      textInput.current.className = 'valid';
    } else {
      textInput.current.className = 'invalid';
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={props.id || 'input'}>{props.title}</label>
      <input
        id={props.id || 'input'}
        type="text"
        ref={textInput}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
