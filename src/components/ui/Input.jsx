import { IconError } from '../../assets/icons';

const Input = ({ label, id, type, placeholder, value, onChange, error }) => {
  return (
    <>
      <label htmlFor={id}>
        <span className="mb-2 font-medium text-dark-blue text-primary">
          {label}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-[#e8e8e8] shadow-[0px_2px_4px_0px_#00000040] mb-2 p-2 rounded-md focus-within:outline-0 w-full text-[#404040] placeholder:text-[#7D7D7D] text-xs placeholder:italic"
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
