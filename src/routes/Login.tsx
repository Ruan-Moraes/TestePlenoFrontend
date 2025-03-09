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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authValidation),
  });

  return (
    <Main>
      <Logo />
      <FormContainer
        onSubmit={handleSubmit((e) => {
          console.log(e);
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
