import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

interface Props {
    invoiceStatus: InvoiceStatusTypeEnum;
}

const InvoiceStatus: React.FC<Props> = ({ invoiceStatus }) => {
    const classes = (invoiceStatus): string => {
        let classes: string = 'flex items-baseline justify-center py-4 px-8 rounded-lg font-bold text-xs bg-opacity-10 dark:bg-opacity-20';
        
        if (invoiceStatus === InvoiceStatusTypeEnum.PAID) classes = `${classes} bg-green text-green`;

        if (invoiceStatus === InvoiceStatusTypeEnum.PENDING) classes = `${classes} bg-orange text-orange`;

        if (invoiceStatus === InvoiceStatusTypeEnum.DRAFT) classes = `${classes} bg-gray text-gray dark:text-white`;

        return classes;
    }

    const dotClasses = (invoiceStatus: InvoiceStatusTypeEnum): string => {
        let dotClasses: string = 'block h-2 w-2 rounded-full mr-2';
        
        if (invoiceStatus === InvoiceStatusTypeEnum.PAID) dotClasses = `${dotClasses} bg-green`;

        if (invoiceStatus === InvoiceStatusTypeEnum.PENDING) dotClasses = `${dotClasses} bg-orange`;

        if (invoiceStatus === InvoiceStatusTypeEnum.DRAFT) dotClasses = `${dotClasses} bg-gray dark:bg-white`;

        return dotClasses;
    }
    
    return (
        <div className={classes(invoiceStatus)}>
            <span className={dotClasses(invoiceStatus)}/>
            {invoiceStatus === InvoiceStatusTypeEnum.PAID && <span>Paid</span>}
            {invoiceStatus === InvoiceStatusTypeEnum.PENDING && <span>Pending</span>}
            {invoiceStatus === InvoiceStatusTypeEnum.DRAFT && <span>Draft</span>}
        </div>
    )
}

export default InvoiceStatus