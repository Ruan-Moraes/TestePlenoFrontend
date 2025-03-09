type ButtonProps = {
  type: 'submit' | 'button';
  className?: string;
  text: string;
  onClick?: () => void;
};

const Button = ({ type, className, text, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`h-12 px-[1.375rem] text-white font-medium text-xs rounded-sm border ${
        className ? className : 'bg-primary border-primary'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
