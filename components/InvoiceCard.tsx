import Link from 'next/link';
import { InvoiceType } from '../models/InvoiceTypes';
import InvoiceStatus from './InvoiceStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import totalPrice from '../utils/totalPrice';
import Moment from 'react-moment';

interface Props {
    invoice: InvoiceType;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
    const cardClasses = `
        grid grid-cols-2 gap-4 p-4 border-2 bg-white flex-col shadow-lg rounded-lg border-white cursor-pointer
        sm:p-8 sm:grid-cols-11
        hover:border-primary-regular

        dark:border-primary-dark dark:bg-primary-dark
        dark:hover:border-primary-regular
    `;

    return (
        <Link key={invoice._id} href={`/${invoice._id}`}>
          <a>
            <div className={cardClasses}>
                <span className="flex items-center col-span-2 text-black text-sm font-bold text-center dark:text-white">{invoice.projectDescription}</span>
                <span className="flex items-center col-span-2 text-secondary-dark text-sm font-medium text-center dark:text-white">Due <Moment format="DD MMM YYYY" date={invoice.invoiceDate} /></span>
                <span className="flex items-center col-span-2 text-secondary-dark text-sm font-medium text-center dark:text-white">{invoice.client.name}</span>
                <span className="flex items-center col-span-2 text-secondary-dark text-sm font-medium text-center dark:text-white">DKK {totalPrice(invoice.itemList)}</span>
                <div className="flex items-center justify-center col-span-2">
                    <InvoiceStatus invoiceStatus={invoice.status} />
                </div>
                <div className="hidden col-span-1 sm:flex items-center justify-end">
                    <FontAwesomeIcon className="text-primary-regular" icon={faAngleRight} />
                </div>
            </div>
          </a>
        </Link>
    )
}

export default InvoiceCard