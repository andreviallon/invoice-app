import { InvoiceType } from '../models/InvoiceTypes';

interface Props {
    invoice: InvoiceType;
    buttonClick: () => void;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
    return (
        <p>{invoice.client.name}</p>
    )
}

export default InvoiceCard