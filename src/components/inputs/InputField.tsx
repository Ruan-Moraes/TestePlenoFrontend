import { useState, useCallback } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

type InputFieldProps = {
  id: 'email' | 'password' | 'confirmPassword' | 'name' | 'bio' | 'contact';
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const InputField = ({
  id,
  label,
  type,
  placeholder,
  register,
  errors,
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === 'password';

  const handlePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  const handleChangeIcons = useCallback(() => {
    if (isPasswordVisible) {
      // @ts-ignore - Ganha tempo
      return <FaEyeSlash fill="white" size={18} />;
    }

    // @ts-ignore
    return <FaEye fill="white" size={18} />;
  }, [isPasswordVisible]);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-xs text-grey-0">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPasswordVisible ? 'text' : type}
          id={id}
          placeholder={placeholder}
          {...register(id)}
          className="border border-grey-2 rounded-sm px-4 h-12 w-full bg-grey-2 focus:border-grey-0 transition duration-200 placeholder:text-base placeholder:text-grey-1 focus:outline-none focus:placeholder:text-grey-0 text-grey-0"
        />
        {isPassword && (
          <button
            type="button"
            onClick={handlePasswordVisibility}
            style={{ position: 'absolute', right: 16, top: 16 }}
            className="focus:outline-none"
          >
            {handleChangeIcons()}
          </button>
        )}
      </div>
      <span className="text-[0.625rem] text-grey-1">{typeof errors[id]?.message === 'string' ? errors[id]?.message : ''}</span>
    </div>
  );
};

export default InputField;
