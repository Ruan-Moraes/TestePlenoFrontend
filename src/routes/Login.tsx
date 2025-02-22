import { useCallback, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { authValidation } from '../schemas/AuthValidationSchema';

import { AuthContext } from '../components/context/AuthContext';

import Main from '../templates/Main';

import ContainerForm from '../components/containers/ContainerForm';
import InputField from '../components/inputs/InputField';
import Button from '../components/buttons/Button';

const Login = () => {
  const { isLogged, login, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authValidation),
  });

  useEffect(() => {
    if (isLogged) {
      navigate('/home');
    }
  }, [isLogged, navigate]);

  useEffect(() => {
    logout();
  }, []);

  const onSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      const { email, password } = data;

      const authResponse = await auth(email, password);

      if (authResponse) {
        login();

        navigate('/home');
      }

      if (!authResponse) {
        alert('E-mail ou senha incorretos');
      }
    },
    []
  );

  // Preferi deixa a função aqui, poderia criar uma pasta utils mas acho necessário
  const auth = useCallback(async (email: string, password: string) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Erro ao efetuar login');
      }

      const data = await response.json();
      const { email: authenticatedEmail, password: authenticatedPassword } =
        data;

      if (email !== authenticatedEmail || password !== authenticatedPassword) {
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Main>
      <section className="flex items-center justify-center min-h-screen bg-gray-100 max-w-96 mx-auto">
        <ContainerForm title="Autenticar">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="E-mail"
              type="email"
              id="email"
              register={register}
              errors={errors.email?.message}
            />
            <InputField
              label="Senha"
              type="password"
              id="password"
              register={register}
              errors={errors.password?.message}
            />
            <Button text="Entrar" className="mt-2" />
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Não tem uma conta?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Cadastre-se
            </a>
          </p>
        </ContainerForm>
      </section>
    </Main>
  );
};

export default Login;
