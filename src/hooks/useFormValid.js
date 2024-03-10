import { useState } from "react";

export function useFormValid(validate) {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});

  const handleChange = (evt) => {
    evt.persist();
    const newValue = {
      ...value,
      [evt.target.name]: evt.target.value,
    }
    setValue(newValue);

    const errors = validate(newValue);
    setError(errors);
  }

  return {
    handleChange,
    error,
    value,
    setValue,
  }
}

export function validation(value) {
  let error = {};
  if (!value.email) {
    error.email = 'Заполните поле Email!';
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)) {
    error.email = 'Невалидный Email';
  }

  if (!value.password) {
    error.password = 'Заполните поле пароль!'
  } else if (value.password.length < 8) {
    const count = 8 - value.password.length;
    error.password = `Пароль должен быть длиной ${count} ${count === 1 ? 'символ' : 'символа'}`;
  }

  if (!value.name) {
    error.name = 'Заполните поле Имени!'
  } else if (value.name.length < 2) {
    const count = 2 - value.name.length;
    error.name = `Имя должно быть длиной ${count} ${count === 1 ? 'символов' : 'символа'}`;
  } else if (value.name.length > 30) {
    error.name = 'Имя должно быть меньше 30 символов';
  }

  return error;
}
