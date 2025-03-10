type MainProps = {
  children: React.ReactNode;
  className?: string;
};

const Main = ({ className, children }: MainProps) => {
  return (
    <main
      className={
        className ? `${className}` : 'px-3 pt-3 pb-12 w-full bg-blue-5'
      }
    >
      {className ? (
        <div className="min-h-screen flex flex-col">{children}</div>
      ) : (
        <div className="min-h-screen flex flex-col lg:w-[23.0625rem] lg:mx-auto">
          {children}
        </div>
      )}
    </main>
  );
};

export default Main;
