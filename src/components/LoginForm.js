import React from 'react';
import { Input } from './Input';
import { CheckButton } from './CheckButton';
import { Button } from './Button';

export function LoginForm2(props) {
  return (
    <div className="login-form2">
      <Input title="Електронна пошта або мобільний номер" validationType="emailOrPhone" />
      <Input title="Пароль" validationType="password" />
      <Input title="Дата народження" validationType="birthdate" />
      <Input title="Дата народження" validationType="birthdate" />
      <Input title="Країна" validationType="country" />
      <Input title="Адреса" validationType="address" />
      <Input title="Мобільний телефон" validationType="emailOrPhone" />
      <div className="empty-name">
        <p>
          By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code
          via SMS from IKEA. Message and data rates may apply.
        </p>
        <p id="underlined-text">More info about Privacy Policy</p>
      </div>
      <Input title="Електрона пошта" validationType="emailOrPhone" />
      <div className="empty-name">
        <p>Вам потрібно буде пройти верифікацію.</p>
      </div>
      <Input title="Пароль" validationType="password" />

      <CheckButton title="Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних" />
      <Button title="ПРОДОВЖИТИ" buttonStyle="dark-button" />
    </div>
  );
}
