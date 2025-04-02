const Container = ({ children, className }) => {
  return (
    <div className={`font-montserrat container ${className} mx-auto px-4`}>
      {children}
    </div>
  );
};

export { Container };
