type FormTitleProps = {
  title: string;
  subTitle?: string;
};

const FormTitle = ({ title, subTitle }: FormTitleProps) => {
  return (
    <div className={subTitle && 'flex flex-col gap-4'}>
      <h1 className="font-bold text-center text-grey-0">{title}</h1>
      {subTitle && (
        <p className="text-[0.625rem] text-grey-1 text-center">{subTitle}</p>
      )}
    </div>
  );
};

export default FormTitle;
