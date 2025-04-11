import { IconLogo, IconError } from "../../assets/icons";
import { Input } from "../../components/ui/Input";
import { useState, useEffect } from "react";

const RegisterPage = () => {
  const initialValues = { username: "", email: "", password: "", confirmPassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.username) {
      errors.username = <><IconError /> Ime i Prezime je neophodno</>;
    }

    if (!values.email) {
      errors.email = <><IconError /> Email je neophodan</>;
    } else if (!regex.test(values.email)) {
      errors.email = <><IconError /> Email adresa nije dobro uneta</>;
    }

    if (!values.password) {
      errors.password = <><IconError /> Lozinka je neophodna</>;
    } else if (values.password.length < 4) {
      errors.password = <><IconError />  Lozinka je prekratka. Pokušajte ponovo </>;
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = <><IconError /> Ponovite lozinku</>;
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = <><IconError /> Lozinke se ne podudaraju. Pokušajte ponovo</>;
    }
    return errors;
  }

  return <div>  <div
    className="flex items-center justify-center min-h-screen bg-gradient-to-b font-montserrat"
    style={{ background: 'linear-gradient(170.99deg, #164864 4.6%, #248CC5 72.55%, #248CC5 100.99%)' }}>

    <div className="bg-white pt-[58px] px-[25px] pb-[104px] rounded-[26px] border-[1px] border-dark-blue w-96"
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
      <h2 className=" text-dark-blue text-center text-[16px] font-semibold mb-4">Registruj se</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Ime i Prezime"
          id="username"
          name="username"
          type="text"
          placeholder="Unesite Ime i Prezime"
          value={formValues.username}
          onChange={handleChange}
        />
        <p className="text-[#ee3c3c] mt-2 text-[12px] font-medium flex gap-[5px]">{formErrors.username}</p>
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Unesite Email adresu"
          value={formValues.email}
          onChange={handleChange}
        />

        <p className="text-[#ee3c3c] mt-2 text-[12px] font-medium flex gap-[5px]">{formErrors.email}</p>
        <Input
          label="Lozinka"
          id="password"
          name="password"
          type="password"
          placeholder="Unesite lozinku"
          value={formValues.password}
          onChange={handleChange}
        />
        <p className="text-[#ee3c3c] mt-2 text-[12px] font-medium flex gap-[5px]">{formErrors.password}</p>
        <Input
          label="Potvrdite lozinku"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Potvrdite lozinku"
          value={formValues.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-[#ee3c3c] mt-2 text-[12px] font-medium flex gap-[5px]">{formErrors.confirmPassword}</p>
        <button
          type="submit"
          className="w-full text-white py-2.5 rounded-lg mt-12 shadow-md font-semibold text-[14px]"
          style={{
            background: 'linear-gradient(180deg, #164864 0.59%, #2C91CA 214.21%)'
          }}
        >
          Registruj se
        </button>
      </form>
      <p className="text-center text-[12px] font-medium mt-8">
        Već imate kreiran nalog?
        <a href="/login" className="text-light-blue font-semibold text-[12px] underline decoration-light-blue ml-1">
          Prijavite se
        </a>
      </p>
    </div>
  </div>
  </div>;
};

export { RegisterPage };
