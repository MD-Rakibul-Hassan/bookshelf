import { FaHeart} from 'react-icons/fa'
import Rating from './Rating';
import { useContext, useState } from 'react';
import { BookContext } from '../../Context';
  import { toast } from "react-toastify";
	import "react-toastify/dist/ReactToastify.css";
import BookModal from './BookModal';


const BookCart = ({ book }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedBook, setSelectedBook] = useState(null);
	const { state, dispatch } = useContext(BookContext);

	const handleAddToCart = (event, book) => {
		event.stopPropagation();
		const findBook = state.cartData.find(item => item.id === book.id);
		if (!findBook) {
			dispatch({
				type: "ADD_TO_CART",
				payload: { ...book },
			})
			  toast.success(`Added ${book.title}`, {
					position: "top-center",
				});
		} else {
			toast.error(`The ${book.title} is already added`, {
				position: "top-right",
			});
		}
	}

	const handleBookSelection = (book) => {
		setSelectedBook(book);
		setShowModal(true);
	}

	const handleModaleClose = () => {
		setSelectedBook(null);
		setShowModal(false)
	}

	const handleBookMarkToggle = (event, book) => {
		event.stopPropagation();
		dispatch({
			type: "TOGGLE_BOOKMARK",
			payload: book
		})
	}

	const { cover, createdAt, description, genre, id, price, rating, title } =
        book;
    
	return (
		<div>
			{showModal && (
				<BookModal
					book={book}
					onClose={handleModaleClose}
					onAddToCart={handleAddToCart}
				/>
			)}
			<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
				<a href="#">
					<div className="relative">
						<button
							onClick={(e) => handleBookMarkToggle(e, book)}
							className={`absolute top-2 right-4 p-1 ${state.bookMarked.some(b => b.id === book?.id)? 'bg-primary': ''}`}
						>
							<FaHeart />
						</button>
						<img
							src={cover}
							onClick={() => handleBookSelection(book)}
							alt={title}
							className="h-96 object-cover"
						/>
					</div>
					{/* Details  */}
					<figcaption className="pt-4">
						<h3 className="text-xl mb-1">{title}</h3>
						<p className="text-[#575A6E] text-sm mb-2">{genre}</p>
						<div className="flex gap-3 my-3">
							<Rating value={rating} />
						</div>
						<button
							onClick={(e) => handleAddToCart(e, book)}
							className="bg-primary rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-[#171923] font-semibold text-sm"
						>
							<span>${price} | Add to Cart</span>
						</button>
					</figcaption>
				</a>
			</figure>
		</div>
	);
};

export default BookCart;
