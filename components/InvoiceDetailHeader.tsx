import Button from './Button';
import InvoiceStatus from './InvoiceStatus';
import { ButtonTypeEnum } from '../models/ButtonTypes';
import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

interface Props {
    invoiceStatus: InvoiceStatusTypeEnum;
    editClicked: () => void;
    deleteClicked: () => void;
    markedAsPaidClicked: () => void;
    markedAsUnpaidClicked: () => void;
}

const InvoiceDetailHeader: React.FC<Props> = ({ invoiceStatus, editClicked, deleteClicked, markedAsPaidClicked, markedAsUnpaidClicked }) => {
    const cardClasses = `
        px-8 py-6 border-2 bg-white shadow-lg rounded-lg border-white flex flex-row items-center justify-between
        dark:border-primary-dark dark:bg-primary-dark
    `;

    return (
        <div className={cardClasses}>
            <div className="flex items-center justify-between w-full sm:w-auto">
                <span className="text-secondary-dark text-sm font-medium text-center dark:text-white mr-4">Status</span>
                <InvoiceStatus invoiceStatus={invoiceStatus} />
            </div>
            <div className="sm:flex items-center hidden">
                <div className="ml-2">
                    <Button text={'Edit'} buttonType={ButtonTypeEnum.SECONDARY} buttonClick={editClicked} />
                </div>
                <div className="ml-2">
                    <Button text={'Delete'} buttonType={ButtonTypeEnum.DANGER} buttonClick={deleteClicked} />
                </div>
                <div className="ml-2 hidden sm:block">
                    {invoiceStatus === InvoiceStatusTypeEnum.PAID ? (
                        <Button text={'Mask as unpaid'} buttonType={ButtonTypeEnum.PRIMARY} buttonClick={markedAsUnpaidClicked} />
                    ) : (
                        <Button text={'Mask as paid'} buttonType={ButtonTypeEnum.PRIMARY} buttonClick={markedAsPaidClicked} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default InvoiceDetailHeader