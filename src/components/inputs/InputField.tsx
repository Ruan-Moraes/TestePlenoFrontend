import { UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  id: 'email' | 'password'; // Tipagem temporária
  label: string;
  type: string;
  register: UseFormRegister<{ email: string; password: string }>;
  errors?: string;
};

const InputField = ({ id, label, type, register, errors }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {errors && (
        <span className="block mt-2 text-sm text-red-600">{errors}</span>
      )}
    </div>
  );
};

export default InputField;
