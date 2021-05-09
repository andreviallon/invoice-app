import dbConnect from '../../../utils/dbConnect';
import Invoice from '../../../models/Invoice';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'PUT':
            await putInvoice(req, res);
            break;
        case 'DELETE':
            await deleteInvoice(req, res);
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

async function putInvoice(req, res) {
    try {
        let items = [];

        req.body.itemList.forEach(item => {
            items.push({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.quantity * item.price
            });
        });

        const updatedInvoice = {
            _id: req.body._id,
            invoiceDate: req.body.invoiceDate,
            paymentTerms: req.body.paymentTerms,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                zipcode: req.body.address.zipcode,
                country: req.body.address.country
            },
            client: {
                name: req.body.client.name,
                email: req.body.client.email,
                address: {
                    street: req.body.client.address.street,
                    city: req.body.client.address.city,
                    zipcode: req.body.client.address.zipcode,
                    country: req.body.client.address.country
                }
            },
            status: req.body.status,
            projectDescription: req.body.projectDescription,
            itemList: items
        };

        await Invoice.findOneAndUpdate({ _id: req.body._id }, {
            _id: updatedInvoice._id,
            invoiceDate: updatedInvoice.invoiceDate,
            paymentTerms: updatedInvoice.paymentTerms,
            address: {
                street: updatedInvoice.address.street,
                city: updatedInvoice.address.city,
                zipcode: updatedInvoice.address.zipcode,
                country: updatedInvoice.address.country
            },
            client: {
                name: updatedInvoice.client.name,
                email: updatedInvoice.client.email,
                address: {
                    street: updatedInvoice.client.address.street,
                    city: updatedInvoice.client.address.city,
                    zipcode: updatedInvoice.client.address.zipcode,
                    country: updatedInvoice.client.address.country
                }
            },
            status: updatedInvoice.status,
            projectDescription: updatedInvoice.projectDescription,
            itemList: updatedInvoice.itemList
        });

        res.json({ data: updatedInvoice });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

async function deleteInvoice(req, res) {
    try {
        const invoice = await Invoice.findById(req.query.id);

        if (!invoice) {
            return res.status(404).json({
                success: false,
                error: 'No invoice found'
            });
        }

        await invoice.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
