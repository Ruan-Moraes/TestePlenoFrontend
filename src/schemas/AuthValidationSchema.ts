import * as Yup from 'yup';

export const authValidation = Yup.object({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(5, 'A senha deve ter no mínimo 5 caracteres')
    .max(64, 'A senha deve ter no máximo 64 caracteres'),
});
