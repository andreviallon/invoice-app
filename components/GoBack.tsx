import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const GoBack = () => {
    return (
        <Link href={'/'}>
            <a>
                <div className="flex items-center cursor-pointer hover:text-secondary-dark dark:text-white dark:hover:text-secondary-regular">
                    <FontAwesomeIcon className="text-primary-regular mr-2" icon={faAngleLeft} />
                    <p className="font-bold text-sm">Go Back</p>
                </div>
            </a>
        </Link>
    )
}

export default GoBack
