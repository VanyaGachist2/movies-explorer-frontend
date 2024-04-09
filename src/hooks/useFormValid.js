import { useEffect, useState } from "react";

export function useFormValid(validate, context) {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const values = target.value;
    const name = target.name;
    const newValue = {
      ...value,
      [name]: values
    }
    setValue(newValue);

    setError(validate(newValue, context));
  }

  useEffect(() => {
    setIsValid(Object.keys(error).length === 0 && Object.keys(value).length > 0);
  }, [error, value]);

  return {
    handleChange,
    error,
    value,
    setValue,
    isValid,
  }
}

export function validation(value, context) {
  let error = {};
  if (!value.email) {
    error.email = 'Заполните поле Email!';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)) {
    error.email = 'Невалидный Email';
  }

  if (context === 'register' || context === 'login') {
    if (!value.password) {
      error.password = 'Заполните поле пароль!'
    } else if (value.password.length < 8) {
      const count = 8 - value.password.length;
      error.password = `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
    }
  }

  if (context === 'register' || context === 'profile') {
    if (!value.name) {
      error.name = 'Заполните поле Имени!'
    } else if (value.name.length < 2) {
      const count = 2 - value.name.length;
      error.name = `Имя должно быть длиной ${count} ${count === 1 ? 'символов' : 'символа'}`;
    } else if (value.name.length > 30) {
      error.name = 'Имя должно быть меньше 30 символов';
    }
  }

  if (context === 'movies') {
    if (!value.search) {
      error.search = 'Заполните поле поиска!';
    }
  }

  return error;
}
