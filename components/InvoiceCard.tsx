import { InvoiceType } from '../models/InvoiceTypes';
import InvoiceStatus from './InvoiceStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import totalPrice from '../utils/totalPrice';
import Moment from 'react-moment';

interface Props {
    invoice: InvoiceType;
    cardClicked: () => void;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
    const cardClasses = `
        p-4
        border-2
        bg-white
        flex-col
        shadow-lg
        rounded-lg
        border-white
        cursor-pointer
        grid
        grid-cols-2
        gap-4

        sm:p-8
        sm:flex
        sm:flex-row
        sm:items-center
        sm:justify-between

        hover:border-primary-regular

        dark:border-primary-dark
        dark:bg-primary-dark

        dark:hover:border-primary-regular
    `;

    return (
        <div className={cardClasses}>
            <div className="text-center">
                <span className="text-primary-regular text-sm font-bold text-center">#</span>
                <span className="text-black text-sm font-bold text-center dark:text-white">{invoice.index}</span>
            </div>
            <span className="text-black font-bold text-center dark:text-white">DKK {totalPrice(invoice.itemList)}</span>
            <span className="text-secondary-dark text-sm font-medium text-center dark:text-white">Due <Moment format="DD MMM YYYY" date={invoice.invoiceDate} /></span>
            <span className="text-secondary-dark text-sm font-medium text-center dark:text-white">{invoice.client.name}</span>
            <div className="col-span-2">
                <InvoiceStatus invoiceStatus={invoice.status} />
            </div>
            <FontAwesomeIcon className="text-primary-regular hidden sm:block" icon={faAngleRight} />
        </div>
    )
}

export default InvoiceCard