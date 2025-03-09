import * as Yup from 'yup';

// Peguei essa regex nesta url: https://regexr.com/37juu
const phoneRegExp =
  /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/;

export const authValidation = Yup.object({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória')
    .min(5, 'A senha deve ter no mínimo 5 caracteres')
    .max(64, 'A senha deve ter no máximo 64 caracteres'),
  confirmPassword: Yup.string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  name: Yup.string()
    .required('Nome é obrigatório')
    .min(3, 'O nome deve ter no mínimo 3 caracteres'),
  bio: Yup.string()
    .required('Bio é obrigatória')
    .max(300, 'A bio deve ter no máximo 300 caracteres'),
  contact: Yup.string() // Decide colocar o contato como só numero de telefone
    .required('Contato é obrigatório')
    .matches(phoneRegExp, 'Contato inválido'),
  role: Yup.string(), // React Select não possui integração com Yup, tive que fazer uma gambiarra mal feita
});
