type FormContainerProps = {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FormContainer = ({ children, onSubmit }: FormContainerProps) => {
  return (
    <form
      className="flex flex-col gap-6 w-full px-4 py-8 mx-auto bg-blue-4 rounded-sm shadow-drop"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default FormContainer;
