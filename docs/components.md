# Component structure guide

## Button Component

The `Button` component is a reusable UI element designed to handle user interactions. It accepts customizable properties to adapt to different use cases.

### Example of component: `Button.jsx`

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

### Props:

- `children`: The content to be displayed inside the button (e.g., text or icons).
- `handleClick`: A function to handle the button's `onClick` event.
- `className`: A string to apply custom CSS classes for styling.

### Usage: `App.jsx`

```
<Button
  handleClick={() => console.log("I'm clicked")}
  className="primary-button"
>
  Click here
</Button>
```
