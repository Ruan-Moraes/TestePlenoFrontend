type FormTitleProps = {
  title: string;
};

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <div>
      <h1 className="font-bold text-center text-grey-0">{title}</h1>
    </div>
  );
};

export default FormTitle;
