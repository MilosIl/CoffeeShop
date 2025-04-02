const Button = ({ children, onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${icon ? 'flex gap-3 items-center justify-center' : ''}  text-white`}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
};
export { Button };
