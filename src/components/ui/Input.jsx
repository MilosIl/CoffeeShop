import { IconError } from '../../assets/icons';

const Input = ({ label, id, name, type, placeholder, value, onChange, error }) => {
  return (
    <>
      <label htmlFor={id}>
        <span className="block text-dark-blue pt-2 mt-4 font-medium">
          {label}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="font-montserrat text-[12px] font-medium italic w-full p-2 mt-2 border-[#E8E8E8] rounded-md bg-[#E8E8E8] focus:outline-none focus:ring-[#E8E8E8]"
          style={{ boxShadow: '0px 2px 4px 0px #00000040' }}
        />
        {error && (
          <div className="flex items-center gap-[5px]">
            <IconError />
            <span className="font-medium text-red text-xs">{error}</span>
          </div>
        )}
      </label>
    </>
  );
};

export { Input };
