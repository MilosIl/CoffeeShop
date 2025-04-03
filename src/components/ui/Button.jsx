const Button = ({ children, onClick, className, icon, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${icon ? 'flex gap-3 items-center justify-center' : ''}  text-white`}
      disabled={disabled}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
};
export { Button };
