import { useContext, useState } from "react";
import "./styles/Search.scss";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { BookDataContext } from "../../context/BookDataContext";
import BookItem from "../../shared/BookItem/BookItem";
const Search = () => {
  const { state } = useContext(BookDataContext);
  const [inputState, setInputState] = useState("");
  return (
    <>
      <div className="search-page">
        <div className="search-bar">
          <AiOutlineArrowLeft fontSize={22} />
          <label>
            <input
              type="text"
              placeholder="Search..."
              value={inputState}
              onChange={(e) => setInputState(e.target.value.toLowerCase())}
            />
            <AiOutlineSearch />
          </label>
        </div>
        <div className="book-list">
          {state.bookData
            .filter((item) =>
              item.bookName.toLowerCase().split(" ").includes(inputState)
            )
            .map((item) => (
              <BookItem {...item} key={item.id} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Search;
