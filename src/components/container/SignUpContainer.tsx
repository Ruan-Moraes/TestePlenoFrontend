import { useNavigate } from 'react-router-dom';

import Button from '../buttons/Button';

const SignUpContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <span className="text-[0.625rem] font-semibold text-grey-1 text-center w-full block">
          Ainda não possui uma conta?
        </span>
      </div>
      <div>
        <Button
          type="button"
          text="Cadastre-se"
          className="bg-grey-1 border-grey-1 w-full"
          onClick={() => navigate('/register')}
        />
      </div>
    </div>
  );
};

export default SignUpContainer;
