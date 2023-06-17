import { useContext } from "react";
import { BookDataContext } from "../../context/BookDataContext";

const Menu = ({ id, readCategory }) => {
  const { dispatch } = useContext(BookDataContext);
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
    <div className="drop-menu">
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
