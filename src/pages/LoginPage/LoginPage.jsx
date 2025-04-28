import { IconLogo } from "../../assets/icons/IconLogo";
import { Input } from "../../components/ui/Input";


const LoginPage = () => {
  return <div>
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b"
      style={{ background: 'linear-gradient(170.99deg, #164864 4.6%, #248CC5 72.55%, #248CC5 100.99%)' }}>
      <div className="bg-white pt-14 px-6 pb-24 rounded-3xl border-[1px] border-dark-blue w-96"
        style={{
          boxShadow: `0px 16px 35px 0px rgba(0, 0, 0, 0.10),
              0px 64px 64px 0px rgba(0, 0, 0, 0.09),
              0px 145px 87px 0px rgba(0, 0, 0, 0.05),
              0px 258px 103px 0px rgba(0, 0, 0, 0.01),
              0px 403px 113px 0px rgba(0, 0, 0, 0.00)`
        }}>

        <div className="flex justify-center mb-4">
          <IconLogo />
        </div>
        <h2 className=" text-[#404040] text-center text-base font-semibold mb-4">Prijavi se</h2>
        <form>

          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Unesite Email adresu"
          />


          <Input
            label="Lozinka"
            id="password"
            type="password"
            placeholder="Unesite lozinku"
          />
          <div className="text-center mt-10">
            <a href="#" className="text-light-blue font-semibold text-xs underline decoration-light-blue">
              Zaboravili ste lozinku?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2.5 rounded-lg mt-6 shadow-md font-semibold text-sm"
            style={{
              background: 'linear-gradient(180deg, #164864 0.59%, #2C91CA 214.21%)'
            }}
          >
            Prijavi se
          </button>
        </form>
        <p className="text-center text-xs font-medium mt-8">
          Još uvek nemate kreiran nalog?
          <a href="/register" className="text-light-blue font-semibold text-xs underline decoration-light-blue ml-1">
            Registrujte se
          </a>
        </p>
      </div>
    </div>





  </div >;
};
export { LoginPage };

