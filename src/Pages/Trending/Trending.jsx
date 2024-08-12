import { getAllBooks } from "../../data/books"
import BookCart from "../BookList/BookCart";



const Trending = () => {
    const books = getAllBooks();
    const trendingBooks = books.sort((a, b) => b.rating - a.rating);
  return (
    <div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7 lg:grid-cols-3">
              {
                  trendingBooks.map((book, i) => {
                      return <BookCart key={i} book={book}/>
                  }) 
              }
      </div>
    </div>
  )
}

export default Trending
