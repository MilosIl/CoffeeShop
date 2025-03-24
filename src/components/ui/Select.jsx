const Select = ({ id, options, label }) => {
  return (
    <div className="relative bg-transparent mt-4 mb-1 text-light-gray/60">
      <label htmlFor={id} className="block">
        <span className="-top-2 left-2 absolute bg-white px-[4.6px] text-[13px] text-light-blue leading-3.5">
          {label}
        </span>
        <select
          id={id}
          className="bg-transparent pt-[7.22px] pr-[10.53px] pb-[5.01px] pl-[12.67px] border border-light-blue rounded-[6.89px] outline-light-blue w-full text-light-blue/58 appearance-none"
        >
          <option value="" disabled hidden>{`Odaberi ${label}`}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="right-[10.58px] absolute inset-y-0 flex items-center px-2 text-light-blue pointer-events-none">
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
