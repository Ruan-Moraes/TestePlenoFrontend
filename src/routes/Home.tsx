import Main from '../templates/Main';
import Header from '../templates/Header';

import Dashboard from '../components/dashboard/Dashboard';

const Home = () => {
  return (
    <>
      <Header />
      <Main className="px-0 flex-grow">
        <Dashboard
          welcomeText="Bem-vindo ao Capys"
          roleText="Você está logado!"
        />
        <div className="bg-blue-4 flex-grow">
          <div className="flex flex-col gap-6 py-6 px-3 lg:container lg:mx-auto">
            <div>
              <h2 className="text-grey-0 text-lg font-bold">
                Que pena! Estamos em desenvolvimento :(
              </h2>
            </div>
            <div>
              <p className="text-grey-0">
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
