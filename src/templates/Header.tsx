import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-4 lg:bg-blue-5 lg:border-b lg:border-grey-2">
      <div className="lg:container lg:mx-auto flex justify-between items-center h-30 p-4 lg:px-0">
        <div>
          <img
            src="/logos/Capys-Logo-2.svg"
            alt="Capys Logo"
            className="w-32 h-32"
          />
        </div>
        <div>
          <button
            className="text-grey-0 text-xs font-semibold lg:bg-blue-4 px-4 py-2 rounded-sm"
            onClick={() => navigate('/login')}
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
