import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { authValidation } from '../schemas/AuthValidationSchema';

import Main from '../templates/Main';

import Logo from '../components/logo/Logo';
import FormContainer from '../components/container/FormContainer';
import FormTitle from '../components/title/FormTitle';
import InputField from '../components/inputs/InputField';
import SelectField from '../components/inputs/SelectField';
import Button from '../components/buttons/Button';
import Toast from '../utils/toast';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authValidation),
  });

  const [roleValue, setRoleValue] = useState('1');

  const onChangeRole = useCallback((value: string) => {
    setRoleValue(value);
  }, []);

  const options = [
    { value: '1', label: 'Desenvolvedor Frontend' },
    { value: '2', label: 'Desenvolvedor Backend' },
    { value: '3', label: 'Desenvolvedor Fullstack' },
  ];

  return (
    <Main>
      <Logo hasButton />
      <FormContainer
        onSubmit={handleSubmit((e) => {
          e.role = roleValue;

          Toast({ text: 'Conta criada com Sucesso!', status: 'success' });

          console.log(e);
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
