import "./Card.css";
import { useState } from "react";

export function Card() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={isActive ? "card card_active" : "card"}
      onClick={() => {
        setIsActive(true);
      }}
    >
      <div className="card__title">Lorem Ipsum dolor sit</div>
      <div className="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}
