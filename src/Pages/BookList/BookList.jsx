import { getAllBooks } from "../../data/books";
import BookCart from "./BookCart";

const BookList = () => {
	const books = getAllBooks();

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
			{books.map((book, index) => {
				return <BookCart key={index} book={book} />;
			})}
		</div>
	);
};

export default BookList;
