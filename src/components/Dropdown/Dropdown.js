import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useDetectClickOutside } from "../../utils/useDetectClickOutside";
import Button from "../Button";
import s from "./Dropdown.module.css";

const DropdownMenu = ({ listOne, listTwo, className }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeList, setActiveList] = useState("primary");
  const [menuHeight, setMenuHeight] = useState("auto");
  const menuRef = useRef(null);
  useDetectClickOutside(menuRef, () => setOpen(false));

  const calcHeight = (elm) => {
    const height = elm.offsetHeight;
    const PADDING_HEIGHT = 16;
    setMenuHeight(height + PADDING_HEIGHT);
  };
  return (
    <div ref={menuRef} className="relative">
      <Button onClick={() => setOpen(!isOpen)}>{isOpen ? "👆" : "👇"}</Button>
      {isOpen && (
        <div
          className={cn(s.menuContainer, className)}
          style={{ height: menuHeight }}
        >
          <CSSTransition
            in={activeList === "primary"}
            timeout={500}
            onEnter={calcHeight}
            unmountOnExit
            classNames={{
              enter: s.primaryEnter,
              enterActive: s.primaryEnterActive,
              exit: s.primaryExit,
              exitActive: s.primaryExitActive,
            }}
          >
            <div className={s.menu}>
              {listOne &&
                listOne.length > 0 &&
                listOne.map(({ icon, label }, i) => (
                  <DropdownItem
                    key={i}
                    iconLeft={icon}
                    iconRight={<div className="ml-auto">👉</div>}
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
            onEnter={calcHeight}
            unmountOnExit
            classNames={{
              enter: s.secondaryEnter,
              enterActive: s.secondaryEnterActive,
              exitActive: s.secondaryExitActive,
            }}
          >
            <div className={s.menu}>
              {listTwo &&
                listTwo.length > 0 &&
                listTwo.map(({ icon, label }, i) => (
                  <DropdownItem
                    key={i}
                    iconRight={icon}
                    iconLeft="👈"
                    onClick={() => setActiveList("primary")}
                  >
                    {label}
                  </DropdownItem>
                ))}
            </div>
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({
  children,
  iconLeft,
  iconRight,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(s.dropDownItem, className)}
      role="button"
      onClick={onClick}
    >
      {iconLeft && typeof iconLeft === "string" ? (
        <span>{iconLeft}</span>
      ) : (
        iconLeft
      )}
      <div className={cn("mx-2")}>{children}</div>
      {iconRight && typeof iconRight === "string" ? (
        <span>{iconRight}</span>
      ) : (
        iconRight
      )}
    </div>
  );
};
export default DropdownMenu;
