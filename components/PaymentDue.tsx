import Moment from 'react-moment';
import { PaymentTermsEnum } from '../models/InvoiceTypes';

interface Props {
    invoiceDate: Date;
    paymentTerms: PaymentTermsEnum
}

const PaymentDue: React.FC<Props> = ({ invoiceDate, paymentTerms }) => {
    return (
        <>
            {paymentTerms === PaymentTermsEnum.NEXT_DAY && <Moment format="DD MMM YYYY" date={invoiceDate} add={{ days: 1 }} />}
            {paymentTerms === PaymentTermsEnum.NEXT_WEEK && <Moment format="DD MMM YYYY" date={invoiceDate} add={{ days: 7 }} />}
            {paymentTerms === PaymentTermsEnum.NEXT_TWO_WEEKS && <Moment format="DD MMM YYYY" date={invoiceDate} add={{ days: 14 }} />}
            {paymentTerms === PaymentTermsEnum.NEXT_MONTH && <Moment format="DD MMM YYYY" date={invoiceDate} add={{ days: 30 }} />}
        </>
    )
}

export default PaymentDue
