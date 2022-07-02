import s from "./Button.module.css";
const Button = ({ children, ...rest }) => {
  const onClick = (e) => {
    e.preventDefault();
    e.currentTarget.blur();
    if (rest.onClick) rest.onClick(e);
  };
  return (
    <button className={s.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
