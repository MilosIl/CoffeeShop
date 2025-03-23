# Component structure guide

Example of component: `Button.jsx`

```
const Button = ({ children, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={`${className}`}>
      {children}
    </button>
  );
};
export { Button }
```

Usage: `App.jsx`

```
<Button handleClick={() => console.log("I'm clicked")}
> Click here </Button>
```
