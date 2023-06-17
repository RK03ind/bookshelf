import { useContext } from "react";
import "./styles/Home.scss";
import { BookDataContext } from "../../context/BookDataContext";
import BookItem from "../../shared/BookItem/BookItem";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { state } = useContext(BookDataContext);
  const navigate = useNavigate();
  let current = state.bookData
    .filter((item) => item.readCategory === "current")
    .map((item) => <BookItem {...item} key={item.id} />);
  let want = state.bookData
    .filter((item) => item.readCategory === "want")
    .map((item) => <BookItem {...item} key={item.id} />);
  let read = state.bookData
    .filter((item) => item.readCategory === "read")
    .map((item) => <BookItem {...item} key={item.id} />);
  return (
    <>
      <div className="home-page">
        <h2>Currently Reading 📖</h2>
        <div className="book-list">{current}</div>
        <h2>Want to Read ✨</h2>
        <div className="book-list">{want}</div>
        <h2>Read ✅</h2>
        <div className="book-list">{read}</div>
        <div className="search-nav" onClick={() => navigate("/search")}>
          <AiOutlineSearch />
        </div>
      </div>
    </>
  );
};
export default Home;
