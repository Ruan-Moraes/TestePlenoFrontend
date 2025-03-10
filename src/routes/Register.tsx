import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';

import { registerValidation } from '../schemas/RegisterValidationSchema';

import Main from '../templates/Main';

import Logo from '../components/logo/Logo';
import FormContainer from '../components/container/FormContainer';
import FormTitle from '../components/title/FormTitle';
import InputField from '../components/inputs/InputField';
import SelectField from '../components/inputs/SelectField';
import Button from '../components/buttons/Button';
import Toast from '../utils/toast';

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const [roleValue, setRoleValue] = useState('Desenvolvedor Frontend');

  const onChangeRole = useCallback((value: string) => {
    setRoleValue(value);
  }, []);

  const options = [
    { value: 'Desenvolvedor Frontend', label: 'Desenvolvedor Frontend' },
    { value: 'Desenvolvedor Backend', label: 'Desenvolvedor Backend' },
    { value: 'Desenvolvedor Fullstack', label: 'Desenvolvedor Fullstack' },
  ];

  interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    bio: string;
    contact: string;
    role: string;
  }

  const createUser = useCallback(async (data: User) => {
    const { confirmPassword, ...rest } = data;

    await fetch('http://localhost:3333/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rest),
    });
  }, []);

  return (
    <Main>
      <Logo hasButton />
      <FormContainer
        onSubmit={handleSubmit((e) => {
          // @ts-ignore
          e.role = roleValue;

          Toast({ text: 'Conta criada com Sucesso!', status: 'success' });

          // @ts-ignore
          createUser(e);

          navigate('/login');
        })}
      >
        <FormTitle
          title="Crie sua conta"
          subTitle="Rápido e grátis, vamos nessa!"
        />
        <InputField
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite aqui seu Nome"
          register={register}
          errors={errors}
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite aqui seu Email"
          register={register}
          errors={errors}
        />
        <InputField
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua Senha"
          register={register}
          errors={errors}
        />
        <InputField
          id="confirmPassword"
          label="Confirmar Senha"
          type="password"
          placeholder="Digite aqui sua Senha novamente"
          register={register}
          errors={errors}
        />
        <InputField
          id="bio"
          label="Bio"
          type="text"
          placeholder="Fale sobre você"
          register={register}
          errors={errors}
        />
        <InputField
          id="contact"
          label="Contato"
          type="text"
          placeholder="Opção de contato"
          register={register}
          errors={errors}
        />
        <SelectField
          label="Selecionar Cargo"
          options={options}
          defaultValue={{ value: '1', label: 'Desenvolvedor Frontend' }}
          onChange={onChangeRole}
        />
        <Button
          type="submit"
          text="Cadastrar"
          className="bg-primary-Disable border-primary-Disable"
        />
      </FormContainer>
    </Main>
  );
};

export default Register;
