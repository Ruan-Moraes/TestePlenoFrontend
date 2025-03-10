type DashboardProps = {
  welcomeText: string;
  roleText: string;
};

const Dashboard = ({ welcomeText, roleText }: DashboardProps) => {
  return (
    <div className="bg-blue-5">
      <div className="flex flex-col gap-2 py-8 px-3 lg:container lg:mx-auto lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h1 className="text-lg font-bold text-grey-0">{welcomeText}</h1>
        </div>
        <div>
          <p className="text-grey-1 text-xs">{roleText}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
