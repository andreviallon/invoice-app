import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const GoBack = () => {
    return (
        <Link href={'/'}>
            <a>
                <div className="inline-flex items-center cursor-pointer hover:text-secondary-dark">
                    <FontAwesomeIcon className="text-primary-regular mr-2 mb-1" icon={faAngleLeft} />
                    <p className="font-bold text-sm">Go Back</p>
                </div>
            </a>
        </Link>
    )
}

export default GoBack