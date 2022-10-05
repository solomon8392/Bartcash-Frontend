import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return(
        <div className={`flex justify-between items-center gap-6 px-6 py-2`}>
          <FontAwesomeIcon icon={faBars} className={`w-6 h-6`} />
          <button className={`block md:hidden`}>Choose a category</button>
          <button className={`hidden md:block`}>Books</button>
          <button className={`hidden md:block`}>Computer and accessories</button>
          <button className={`hidden md:block`}>Cloths and accessories</button>
          <button className={`hidden md:block`}>Luggage and bags</button>
          <button className={`hidden md:block`}>Furnitures</button>
          <button className={`hidden md:block`}>Phones and accessories</button>
      </div>
    );
}