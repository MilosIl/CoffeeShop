import { Link, useNavigate } from 'react-router';
import { IconLogo } from '@/assets/icons';
import { Input, Button } from '@/components/ui/';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const {login}= useAuth()
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    if (email && password) {
      await login(email, password);
      navigate('/');
    }

  };
  return (
    <div
      className="flex justify-center items-center bg-gradient-to-b min-h-screen"
      style={{
        background:
          'linear-gradient(170.99deg, #164864 4.6%, #248CC5 72.55%, #248CC5 100.99%)',
      }}
    >
      <div
        className="border-dark-blue rounded-3xl w-96"
        style={{
          background:
            'linear-gradient(170.99deg, #164864 4.6%, #248CC5 72.55%, #248CC5 100.99%)',
        }}
      >
        <div
          className="bg-white px-[25px] pt-[58px] pb-[104px] border-[1px] border-dark-blue rounded-[26px] w-96"
          style={{
            boxShadow: `0px 16px 35px 0px rgba(0, 0, 0, 0.10),
              0px 64px 64px 0px rgba(0, 0, 0, 0.09),
              0px 145px 87px 0px rgba(0, 0, 0, 0.05),
              0px 258px 103px 0px rgba(0, 0, 0, 0.01),
              0px 403px 113px 0px rgba(0, 0, 0, 0.00)`,
          }}
        >
          <div className="flex justify-center mb-4">
            <IconLogo />
          </div>
          <h2 className="mb-4 font-semibold text-[#404040] text-base text-center">
            Prijavi se
          </h2>
          <form onSubmit={handleLogin}>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Unesite Email adresu"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
            <Input
              label="Lozinka"
              id="password"
              type="password"
              placeholder="Unesite lozinku"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
            <div className="mt-10 text-center">
              <Link
                to="#"
                className="font-semibold text-[12px] text-light-blue decoration-light-blue underline"
              >
                Zaboravili ste lozinku?
              </Link>
            </div>

            <Button
              type="submit"
              className="bg-[linear-gradient(180deg,_#164864_0.59%,_#2C91CA_214.21%)] shadow-md mt-6 py-2.5 rounded-lg w-full font-semibold text-white text-sm"
            >
              Prijavi se
            </Button>
          </form>
          <p className="mt-8 font-medium text-xs text-center">
            Još uvek nemate kreiran nalog?
            <Link
              to="/register"
              className="ml-1 font-semibold text-light-blue text-xs decoration-light-blue underline"
            >
              Registrujte se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export { LoginPage };
