import cn from "classnames";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../Button";
import s from "./Dropdown.module.css";
import "./dropdown.css";

const DropdownMenu = ({ listOne, listTwo, className }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeList, setActiveList] = useState("primary");
  return (
    <>
      <Button onClick={() => setOpen(!isOpen)}>OPEN ME</Button>
      {isOpen && (
        <div className={cn(s.menuContainer, className)}>
          <CSSTransition
            in={activeList === "primary"}
            timeout={500}
            unmountOnExit
            classNames="menu-primary"
          >
            <div className={s.menu}>
              {listOne &&
                listOne.length > 0 &&
                listOne.map(({ icon, label }, i) => (
                  <DropdownItem
                    key={i}
                    icon={icon}
                    onClick={() => setActiveList("secondary")}
                  >
                    {label}
                  </DropdownItem>
                ))}
            </div>
          </CSSTransition>
          <CSSTransition
            in={activeList === "secondary"}
            timeout={500}
            unmountOnExit
            classNames="menu-secondary"
          >
            <div className={s.menu}>
              {listTwo &&
                listTwo.length > 0 &&
                listTwo.map(({ icon, label }, i) => (
                  <DropdownItem
                    key={i}
                    icon={icon}
                    onClick={() => setActiveList("primary")}
                  >
                    {label}
                  </DropdownItem>
                ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </>
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
          <div className={cn("flex-shrink-0")}>{icon}</div>
          <div className={cn("ml-2")}>{children}</div>
        </div>
      )}
      {!icon && children}
    </div>
  );
};
export default DropdownMenu;
