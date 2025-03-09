type MainProps = {
  children: React.ReactNode;
  className?: string;
};

const Main = ({ className, children }: MainProps) => {
  return (
    <>
      <main
        className={`px-3 pt-3 pb-12 w-full lg:w-[23.0625rem] lg:mx-auto ${
          className ? className : ''
        }`}
      >
        {children}
      </main>
    </>
  );
};

export default Main;
