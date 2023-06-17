import { createContext, useReducer } from "react";

export const BookDataContext = createContext();
const intialValue = {
  bookData: [
    {
      id: "b682b192-8d55-4a0e-9762-8f9b83af17e9",
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      readCategory: "current",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    },
    {
      id: "1c8948bc-1b35-42b2-8f1a-33b6a4f7595b",
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      readCategory: "current",
      imageLink: "https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg",
    },
    {
      id: "6f6ed5e6-3b8d-4d42-94e9-4231206a78e6",
      bookName: "1984",
      authorName: "George Orwell",
      readCategory: "want",
      imageLink:
        "https://m.media-amazon.com/images/I/71NvkZxn-fL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "7c273041-2f2e-47fc-8c4a-2fc90cb9da0a",
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      readCategory: "want",
      imageLink:
        "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "6b6c8324-2e3a-4d4d-8e14-97f640b36eb8",
      bookName: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      readCategory: "current",
      imageLink: "https://m.media-amazon.com/images/I/7108sdEUEGL.jpg",
    },
    {
      id: "fa82463d-71e7-4c0a-a0b0-248b6f3174f1",
      bookName: "To the Lighthouse",
      authorName: "Virginia Woolf",
      readCategory: "read",
      imageLink: "https://m.media-amazon.com/images/I/517Hf-iPmnL.jpg",
    },
    {
      id: "cb5c0eb3-0b29-4b99-8a39-3bc5aeb6c7e4",
      bookName: "Moby-Dick",
      authorName: "Herman Melville",
      readCategory: "read",
      imageLink:
        "https://m.media-amazon.com/images/I/41VnFKC9srL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "ed8c38c9-8481-4a6d-912a-4495e8ef2682",
      bookName: "The Hobbit",
      authorName: "J.R.R. Tolkien",
      readCategory: "none",
      imageLink:
        "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "a32a2d53-8110-4c2f-9d2e-b67fd3b72f57",
      bookName: "The Alchemist",
      authorName: "Paulo Coelho",
      readCategory: "none",
      imageLink:
        "https://m.media-amazon.com/images/I/41nagm+ctkL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "9db6921b-61b9-4014-8d88-5362ea144737",
      bookName: "Brave New World",
      authorName: "Aldous Huxley",
      readCategory: "none",
      imageLink: "https://m.media-amazon.com/images/I/51oJ1kc17ML.jpg",
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY": {
      const updatedData = state.bookData.map((item) =>
        item.id === action.payload.id
          ? { ...item, readCategory: action.payload.value }
          : item
      );
      console.log(updatedData);
      return { bookData: updatedData };
    }
    default:
      return state;
  }
};
export const BookDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialValue);
  return (
    <BookDataContext.Provider value={{ state, dispatch }}>
      {children}
    </BookDataContext.Provider>
  );
};
