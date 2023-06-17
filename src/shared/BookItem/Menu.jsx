import { useContext } from "react";
import { BookDataContext } from "../../context/BookDataContext";
import useOnClickOutside from "../../hooks/useOnClickOutSide";

const Menu = ({ id, readCategory, setMenuState }) => {
  const { dispatch } = useContext(BookDataContext);
  const { ref } = useOnClickOutside(setMenuState);
  const updateCategory = (value) => {
    dispatch({
      type: "UPDATE_CATEGORY",
      payload: {
        id,
        value,
      },
    });
  };
  return (
    <div className="drop-menu" ref={ref}>
      <div>Move to....</div>
      <div onClick={() => updateCategory("current")}>
        {readCategory === "current" && "✔ "}Currently Reading
      </div>
      <div onClick={() => updateCategory("read")}>
        {readCategory === "read" && "✔ "}Read
      </div>
      <div onClick={() => updateCategory("want")}>
        {readCategory === "want" && "✔ "}Want to Read
      </div>
      <div onClick={() => updateCategory("none")}>
        {readCategory === "none" && "✔ "}None
      </div>
    </div>
  );
};

export default Menu;
