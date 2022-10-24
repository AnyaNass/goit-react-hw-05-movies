import PropTypes from 'prop-types';
import { FaMeh } from 'react-icons/fa';
import { Error, Message } from './ErrorMessage.styled'

const ErrorMessage = ({ text }) => {
	return <Error><FaMeh />
		<Message>{text}</Message>
	</Error>
}

export default ErrorMessage

ErrorMessage.propTypes = {
	text: PropTypes.string,
}