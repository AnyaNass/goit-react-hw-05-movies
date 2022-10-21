import { FaMeh } from 'react-icons/fa';
import { Error, Message } from './ErrorMessage.styled'

export const ErrorMessage = ({ text }) => {
	return <Error><FaMeh />
		<Message>{text}</Message>
	</Error>
}