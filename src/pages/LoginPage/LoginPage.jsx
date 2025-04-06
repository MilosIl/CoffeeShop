import { IconLogo } from "../../assets/icons/IconLogo";

const LoginPage = () => {
  return <div>
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b font-montserrat"
      style={{ background: 'linear-gradient(170.99deg, #164864 4.6%, #248CC5 72.55%, #248CC5 100.99%)' }}>
      <div className="bg-white pt-[58px] px-[25px] pb-[104px] rounded-[26px] border-[1px] border-dark-blue shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <IconLogo />
        </div>
        <h2 className=" text-[#404040] text-center text-lg font-semibold mb-4">Prijavi se</h2>
        <form>
          <label className="block text-[#164864] pt-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Unesite Email adresu"
            className="font-montserrat text-[12px] font-medium italic w-full p-2 mt-2 border-[#E8E8E8] rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-[#E8E8E8]"
            style={{ boxShadow: '0px 2px 4px 0px #00000040' }}
          />

          <label className="block text-[#164864] pt-2 mt-4 font-medium">Lozinka</label>
          <input
            type="password"
            placeholder="Unesite lozinku"
            className="font-montserrat text-[12px] font-medium italic w-full p-2 mt-2 border-[#E8E8E8] rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-[#E8E8E8]"
            style={{ boxShadow: '0px 2px 4px 0px #00000040' }}
          />

          <div className="text-center mt-10">
            <a href="#" className="text-light-blue font-semibold text-[12px] underline decoration-light-blue">
              Zaboravili ste lozinku?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white py-2.5 rounded-lg mt-6 shadow-md font-semibold text-[14px]"
            style={{
              background: 'linear-gradient(180deg, #164864 0.59%, #2C91CA 214.21%)'
            }}
          >
            Prijavi se
          </button>
        </form>
        <p className="text-center text-[12px] font-medium mt-8">
          Još uvek nemate kreiran nalog?
          <a href="#" className="text-light-blue font-semibold text-[12px] underline decoration-light-blue">
            Registrujte se
          </a>
        </p>
      </div>
    </div>





  </div >;
};
export { LoginPage };


