import { useContext } from "react";
import "./styles/Home.scss";
import { BookDataContext } from "../../context/BookDataContext";
import BookItem from "../../shared/BookItem/BookItem";
import { AiOutlineSearch } from "react-icons/ai";
const Home = () => {
  const { state } = useContext(BookDataContext);
  return (
    <>
      <div className="home-page">
        <h2>Currently Reading 📖</h2>
        <div className="book-list">
          {state.bookData
            .filter((item) => item.readCategory === "current")
            .map((item) => (
              <BookItem {...item} key={item.id} />
            ))}
        </div>
        <h2>Want to Read ✨</h2>
        <div className="book-list">
          {state.bookData
            .filter((item) => item.readCategory === "want")
            .map((item) => (
              <BookItem {...item} key={item.id} />
            ))}
        </div>
        <h2>Read ✅</h2>
        <div className="book-list">
          {state.bookData
            .filter((item) => item.readCategory === "read")
            .map((item) => (
              <BookItem {...item} key={item.id} />
            ))}
        </div>
        <div className="search-nav">
          <AiOutlineSearch />
        </div>
      </div>
    </>
  );
};
export default Home;
