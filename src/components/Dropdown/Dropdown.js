import cn from "classnames";
import s from "./Dropdown.module.css";

const DropdownMenu = ({ list, className }) => {
  return (
    <div className={cn(s.menuContainer, className)}>
      <div className={s.menu}>
        {list &&
          list.length > 0 &&
          list.map(({ icon, label, onClick }) => (
            <DropdownItem key={label} icon={icon} onClick={onClick}>
              {label}
            </DropdownItem>
          ))}
      </div>
      <div className={s.menu}>
        {list &&
          list.length > 0 &&
          list.map(({ icon, label, onClick }) => (
            <DropdownItem key={label} icon={icon} onClick={onClick}>
              {label}
            </DropdownItem>
          ))}
      </div>
    </div>
  );
};

const DropdownItem = ({ children, icon, onClick, className }) => {
  return (
    <div
      className={cn(s.dropDownItem, className)}
      role="button"
      onClick={onClick}
    >
      {icon && (
        <div className={cn("flex items-center")}>
          <div className={cn("flex-shrink-0")}>
            <img className={cn("w-6 h-6")} src={icon} alt="" />
          </div>
          <div className={cn("ml-2")}>{children}</div>
        </div>
      )}
      {!icon && children}
    </div>
  );
};
export default DropdownMenu;
