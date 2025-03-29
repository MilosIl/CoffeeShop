const Select = ({ id, options, label }) => {
  return (
    <div className="relative bg-transparent mt-4 mb-1 text-light-gray/60">
      <label htmlFor={id} className="block">
        <span className="-top-2 left-2 absolute bg-dark-blue px-2 text-light-gray text-xs leading-3.5">
          {label}
        </span>
        <select
          id={id}
          className="bg-transparent pt-2 pr-2.5 pb-1.5 pl-3 border border-light-gray rounded-md outline-light-gray w-full text-light-gray appearance-none"
        >
          <option value="" disabled hidden className="font-medium text-2xs">{`Odaberi ${label}`}</option>
          {options.map((option) => (
            <option className="bg-gray-500" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="right-2.5 absolute inset-y-0 flex items-center px-2 text-white pointer-events-none">
          <svg
            className="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </label>
    </div>
  );
};

export { Select };
