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
    const cardClasses = `px-8 py-6 border-2 bg-white shadow-lg rounded-lg border-white flex flex-col items-center justify-between sm:flex-row`;

    const actionsClasses = `
        flex items-center justify-center w-full fixed right-0 left-0 bottom-0 py-4 bg-white shadow-2xl
        sm:justify-start sm:mt-0 sm:relative sm:shadow-none sm:py-0 sm:w-auto
    `;

    return (
        <div className={cardClasses}>
            <div className="flex items-center justify-between w-full sm:w-auto">
                <span className="text-secondary-dark text-sm font-medium text-center mr-4">Status</span>
                <InvoiceStatus invoiceStatus={invoiceStatus} />
            </div>
            <div className={actionsClasses}>
                <div className="ml-2">
                    <Button text={'Edit'} buttonType={ButtonTypeEnum.SECONDARY} buttonClick={editClicked} />
                </div>
                <div className="ml-2">
                    <Button text={'Delete'} buttonType={ButtonTypeEnum.DANGER} buttonClick={deleteClicked} />
                </div>
                <div className="ml-2">
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