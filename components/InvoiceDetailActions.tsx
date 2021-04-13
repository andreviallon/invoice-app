import Button from './Button';
import { ButtonTypeEnum } from '../models/ButtonTypes';
import { InvoiceStatusTypeEnum } from '../models/InvoiceStatusTypes';

interface Props {
    invoiceStatus: InvoiceStatusTypeEnum;
    editClicked: () => void;
    deleteClicked: () => void;
    markedAsPaidClicked: () => void;
    markedAsUnpaidClicked: () => void;
}

const InvoiceDetailActions: React.FC<Props> = ({ invoiceStatus, editClicked, deleteClicked, markedAsPaidClicked, markedAsUnpaidClicked }) => {
    return (
        <div className="flex items-center">
            <div className="ml-2">
                <Button text={'Edit'} buttonType={ButtonTypeEnum.SECONDARY} buttonClick={editClicked} />
            </div>
            <div className="ml-2">
                <Button text={'Delete'} buttonType={ButtonTypeEnum.DANGER} buttonClick={deleteClicked} />
            </div>
            <div className="ml-2">
                {invoiceStatus === InvoiceStatusTypeEnum.PAID ? (
                    <Button text={'Mask as unpaid'} buttonType={ButtonTypeEnum.PRIMARY} buttonClick={markedAsPaidClicked} />
                ) : (
                    <Button text={'Mask as paid'} buttonType={ButtonTypeEnum.PRIMARY} buttonClick={markedAsUnpaidClicked} />
                )}
            </div>
        </div>
    )
}

export default InvoiceDetailActions