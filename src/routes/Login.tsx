import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from '../templates/Main';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { authValidation } from '../schemas/AuthValidationSchema';

import Logo from '../components/logo/Logo';
import FormContainer from '../components/container/FormContainer';
import FormTitle from '../components/title/FormTitle';
import InputField from '../components/inputs/InputField';
import Button from '../components/buttons/Button';
import SignUpContainer from '../components/container/SignUpContainer';
import Toast from '../utils/toast';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authValidation),
  });

  const authUser = useCallback(
    async (data: { email: string; password: string }) => {
      const users = await fetch('http://localhost:3333/users');
      const usersData = await users.json();

      const user = usersData.find(
        (user: { email: string; password: string }) =>
          user.email === data.email && user.password === data.password
      );

      if (!user) {
        return Toast({
          text: 'Usuário não autenticado!',
          status: 'error',
        });
      }

      Toast({
        text: 'Usuário autenticado com sucesso!',
        status: 'success',
      });

      const { name, role } = user;

      const treatedName = name.split(' ').join('_');
      const treatedRole = role.split(' ').join('_');

      setTimeout(() => {
        navigate(`/home?name=${treatedName}&role=${treatedRole}`);
      }, 1000);
    },
    []
  );

  return (
    <Main>
      <Logo />
      <FormContainer
        onSubmit={handleSubmit((data) => {
          authUser(data);
        })}
      >
        <FormTitle title="Login" />
        <InputField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu Email"
          register={register}
          errors={errors}
        />
        <InputField
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua Senha"
          register={register}
          errors={errors}
        />
        <Button type="submit" text="Entrar" />
        <SignUpContainer />
      </FormContainer>
    </Main>
  );
};

export default Login;
