import { useContext, useState } from "react";
import "./styles/Search.scss";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BookDataContext } from "../../context/BookDataContext";
import BookItem from "../../shared/BookItem/BookItem";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { state } = useContext(BookDataContext);
  const [inputState, setInputState] = useState("");
  const navigate = useNavigate();
  let searchDataMapped = state.bookData
    .filter((item) =>
      item.bookName.toLowerCase().split(" ").includes(inputState)
    )
    .map((item) => <BookItem {...item} key={item.id} />);
  return (
    <>
      <div className="search-page">
        <div className="search-bar">
          <AiFillHome fontSize={28} onClick={() => navigate("/")} />
          <label>
            <input
              type="text"
              placeholder="Search..."
              value={inputState}
              onChange={(e) => setInputState(e.target.value.toLowerCase())}
            />
            <AiOutlineSearch fontSize={25} />
          </label>
        </div>
        <div className="book-list">
          {searchDataMapped.length === 0 ? (
            <h2>No item was found</h2>
          ) : (
            searchDataMapped
          )}
        </div>
      </div>
    </>
  );
};
export default Search;
