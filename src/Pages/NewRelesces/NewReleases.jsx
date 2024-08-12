import { data } from "autoprefixer";
import { getAllBooks } from "../../data/books";
import BookCart from "../BookList/BookCart";

const NewReleases = () => {
	const books = getAllBooks();
	const today = new Date();

	const oneDay = 24 * 60 * 60 * 1000;
	const sevenDayAgo = today.getTime() -( 7 * oneDay);
	const latestBooks = books.filter((book) => {
		const bookCreatedDate = new Date(book.createdAt).getTime();
		return bookCreatedDate >= sevenDayAgo
	});

	return (
		<div>
			<div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7 lg:grid-cols-3">
				{latestBooks.map((book, i) => {
					return <BookCart key={i} book={book} />;
				})}
			</div>
		</div>
	);
};

export default NewReleases;
