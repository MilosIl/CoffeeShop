const Container = ({ children, className }) => {
  return (
    <div className={`font-montserrat container ${className} mx-auto`}>
      {children}
    </div>
  );
};

export { Container };
