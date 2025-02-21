import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { authValidation } from '../schema/AuthValidationSchema';

import Main from '../templates/Main';

import ContainerForm from '../components/containers/ContainerForm';
import InputField from '../components/inputs/InputField';
import Button from '../components/buttons/Button';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authValidation),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;

    const authResponse = await auth(email, password);

    if (authResponse) {
      navigate('/dashboard');
    }

    if (!authResponse) {
      alert('E-mail ou senha incorretos');
    }
  };

  const auth = async (email: string, password: string) => {
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
  };

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
