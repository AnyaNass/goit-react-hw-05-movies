import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getReviews } from "servises/getReviews"
import { ErrorMessage } from "components/ErrorMessage/ErrorMessage";
import { Loader } from "components/Loader/Loader";

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

	return (
		<><ul>
			{reviews.map(review => <li key={review.id} >
				<h2>Name: {review.author_details.name}</h2>
				<p>Review: {review.content}</p>
			</li>)}
		</ul>
			{isLoading && <Loader />}
			{error && <ErrorMessage />}
		</>
	)
}