type MainProps = {
  children: React.ReactNode;
  className?: string;
};

const Main = ({ className, children }: MainProps) => {
  return (
    <>
      <main className={className ? `p-4 w-full ${className}` : 'p-4 w-full'}>
        {children}
      </main>
    </>
  );
};

export default Main;
