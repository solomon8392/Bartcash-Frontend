import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


export default function Home({ productsProps }) {
    return (
        <FontAwesomeIcon icon={faHeart} className={`w-6 h-6 text-primary`} />
    );
}
