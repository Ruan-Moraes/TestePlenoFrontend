type ButtonProps = {
  className?: string;
  text: string;
};

const Button = ({ className, text }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-sm shadow-md transition ${
        className && className
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
