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
    const desktopCardClasses = `
        hidden grid-cols-11 gap-4 border-2 bg-white flex-col shadow-lg rounded-lg border-white cursor-pointer p-8
        hover:border-primary-regular

        sm:grid
    `;

    const mobileCardClasses = `
        grid grid-cols-2 gap-x-4 gap-y-6 border-2 bg-white flex-col shadow-lg rounded-lg border-white cursor-pointer p-8
        hover:border-primary-regular

        sm:hidden
    `;

    return (
        <Link key={invoice._id} href={`/${invoice._id}`}>
          <a>
            <div className={desktopCardClasses}>
                <span className="flex items-center col-span-2 text-dark text-sm font-bold text-center">{invoice.projectDescription}</span>
                <span className="flex items-center col-span-2 text-secondary-dark text-sm font-medium text-center">
                    <span className="mr-1">Due</span> <Moment format="DD MMM YYYY" date={invoice.invoiceDate} />
                </span>
                <span className="flex items-center col-span-2 text-secondary-dark text-sm font-medium text-center">{invoice.client.name}</span>
                <span className="flex items-center col-span-2 text-dark font-bold text-center">$ {totalPrice(invoice.itemList)}</span>
                <div className="flex items-center justify-center col-span-2">
                    <InvoiceStatus invoiceStatus={invoice.status} />
                </div>
                <div className="flex col-span-1 items-center justify-end">
                    <FontAwesomeIcon className="text-primary-regular" icon={faAngleRight} />
                </div>
            </div>
            <div className={mobileCardClasses}>
                <span className="flex items-center col-span-1 text-dark text-sm font-bold text-center">{invoice.projectDescription}</span>
                <span className="flex items-center justify-end col-span-1 text-secondary-dark text-sm font-medium">{invoice.client.name}</span>
                <div className="flex flex-col col-span-1">
                    <span className="text-secondary-dark text-sm font-medium">Due<Moment format="DD MMM YYYY" date={invoice.invoiceDate} /></span>
                    <span className="text-dark text-sm mt-1 font-bold">$ {totalPrice(invoice.itemList)}</span>
                </div>
                <div className="flex items-center justify-end col-span-1">
                    <InvoiceStatus invoiceStatus={invoice.status} />
                </div>
            </div>
          </a>
        </Link>
    )
}

export default InvoiceCard