import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getReviews } from "servises/getReviews"
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";
import { ReviewsList, ReviewsListItem, Author, Review } from './Review.styled'

export const Reviews = () => {
	const [reviews, setReviewss] = useState();
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		setIsLoading(true);

		async function fetch() {
			try {
				const response = await getReviews(id);
				setReviewss(response.results)

				if (response.results.length === 0) {
					throw new Error();
				}
			} catch {
				setError(true)
			} finally {
				setIsLoading(false);
			}
		}

		fetch()
	}, [id])

	if (!reviews) {
		return;
	}
	console.log(reviews);
	return (
		<>
			<ReviewsList>
				{reviews.map(review => <ReviewsListItem key={review.id} >
					<Author><span>Name: </span>{review.author}</Author>
					<Review><span>Review:</span> {review.content}</Review>
				</ReviewsListItem>)}
			</ReviewsList>
			{isLoading && <Loader />}
			{error && <ErrorMessage text="Sorry, there aren`t any reviews" />}
		</>
	)
}