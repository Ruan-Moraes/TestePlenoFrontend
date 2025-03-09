type ButtonProps = {
  type: 'submit' | 'button';
  className?: string;
  text: string;
};

const Button = ({ type, className, text }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`h-12 w-full px-[1.375rem] text-white font-medium text-xs rounded-sm border  ${
        className ? className : 'bg-primary border-primary'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
