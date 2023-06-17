import { AiFillCaretDown } from "react-icons/ai";
import "./BookItem.scss";
import { useState } from "react";
import Menu from "./Menu";
const BookItem = ({ imageLink, bookName, authorName, readCategory, id }) => {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="book-item">
      <img src={imageLink} alt={bookName} />
      <div className="name">{bookName}</div>
      <div>{authorName}</div>
      <div
        className="menu-button"
        onClick={() => setMenuState((prevState) => !prevState)}
      >
        <AiFillCaretDown />
      </div>
      {menuState && <Menu {...{ id, readCategory, setMenuState }} />}
    </div>
  );
};

export default BookItem;
