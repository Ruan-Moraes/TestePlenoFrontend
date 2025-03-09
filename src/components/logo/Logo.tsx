import { useNavigate } from 'react-router-dom';

import Button from '../buttons/Button';

type LogoProps = {
  hasButton?: boolean;
};

const Logo = ({ hasButton }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center -mb-6 ${
        hasButton ? 'justify-between' : 'justify-center'
      }`}
    >
      <img
        src="/logos/Capys-Logo-2.svg"
        alt="Capys Logo"
        className="w-[9.25rem] h-[9.25rem]"
      />
      {hasButton && (
        <Button
          type="button"
          text="Voltar"
          className="bg-blue-4 border-blue-4"
          onClick={() => navigate('/login')}
        />
      )}
    </div>
  );
};

export default Logo;
