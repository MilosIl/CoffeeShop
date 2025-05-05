import { Link } from 'react-router';
import { IconLogo, IconError } from '@/assets/icons';
import { Input } from '@/components/ui/Input';
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';

const RegisterPage = () => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [existingEmails, setExistingEmails] = useState([]);
  const {register} = useAuth()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues, existingEmails));
    await register(formValues.email, formValues.password, formValues.fullName);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setExistingEmails((prevEmails) => [...prevEmails, formValues.email]);
      setFormValues(initialValues);
      setIsSubmit(false);
    }
  }, [formErrors, isSubmit]);

  const validate = (values, existingEmails) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.fullName) {
      errors.fullName = (
        <>
          <IconError /> Ime i Prezime je neophodno
        </>
      );
    }

    if (!values.email) {
      errors.email = (
        <>
          <IconError /> Email je neophodan
        </>
      );
    } else if (!regex.test(values.email)) {
      errors.email = (
        <>
          <IconError /> Email adresa nije dobro uneta
        </>
      );
    } else if (
      existingEmails.some(
        (email) => email.toLowerCase() === values.email.toLowerCase()
      )
    ) {
      errors.email = (
        <>
          <IconError /> Vec postoji nalog sa ovom email adresom
        </>
      );
    }

    if (!values.password) {
      errors.password = (
        <>
          <IconError /> Lozinka je neophodna
        </>
      );
    } else if (values.password.length < 8) {
      errors.password = (
        <>
          <IconError /> Lozinka je prekratka. Pokušajte ponovo{' '}
        </>
      );
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = (
        <>
          <IconError /> Ponovite lozinku
        </>
      );
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = (
        <>
          <IconError /> Lozinke se ne podudaraju. Pokušajte ponovo
        </>
      );
    }
    return errors;
  };

  return (
    <div>
      <div
        className="flex justify-center items-center bg-gradient-to-b min-h-screen background-gradient">
        <div
          className="bg-white px-6 pt-14 pb-24 border border-dark-blue rounded-3xl w-96 box-shadow">
          <div className="flex justify-center mb-4">
            <IconLogo />
          </div>
          <h2 className="mb-4 font-semibold text-dark-blue text-base text-center">
            Registruj se
          </h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Ime i Prezime"
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Unesite Ime i Prezime"
              value={formValues.fullName}
              onChange={handleChange}
            />
            <p className="flex gap-1.5 mt-2 font-medium text-red text-xs">
              {formErrors.fullName}
            </p>
            <Input
              label="Email"
              id="email"
              name="email"
              type="text"
              placeholder="Unesite Email adresu"
              value={formValues.email}
              onChange={handleChange}
            />

            <p className="flex gap-1.5 mt-2 font-medium text-red text-xs">
              {formErrors.email}
            </p>
            <Input
              label="Lozinka"
              id="password"
              name="password"
              type="password"
              placeholder="Unesite lozinku"
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="flex gap-1.5 mt-2 font-medium text-red text-xs">
              {formErrors.password}
            </p>
            <Input
              label="Potvrdite lozinku"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Potvrdite lozinku"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <p className="flex gap-1.5 mt-2 font-medium text-red text-xs">
              {formErrors.confirmPassword}
            </p>
            <Button
              type="submit"
              className="shadow-md mt-12 py-2.5 rounded-lg w-full font-semibold text-white text-sm button-gradient"

            >
              Registruj se
            </Button>
          </form>
          <p className="mt-8 font-medium text-xs text-center">
            Već imate kreiran nalog?
            <Link
              to="/login"
              className="ml-1 font-semibold text-light-blue text-xs decoration-light-blue underline"
            >
              Prijavite se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { RegisterPage };
