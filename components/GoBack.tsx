import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    goBackClick: () => void;
}

const GoBack: React.FC<Props> = ({ goBackClick }) => {
    return (
        <div className="flex items-center cursor-pointer hover:text-secondary-dark dark:text-white dark:hover:text-secondary-regular" onClick={goBackClick}>
            <FontAwesomeIcon className="text-primary-regular mr-2" icon={faAngleLeft} />
            <p className="font-bold text-sm">Go Back</p>
        </div>
    )
}

export default GoBack
