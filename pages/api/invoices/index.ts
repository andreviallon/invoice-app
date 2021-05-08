import dbConnect from '../../../utils/dbConnect';
import Invoice from '../../../models/Invoice';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      getInvoices(res);
      break;
    case 'POST':
      await postInvoice(req, res);
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

async function getInvoices(res) {
  try {
    const invoices = await Invoice.find({});
    res.status(200).json({ success: true, data: invoices });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

async function postInvoice(req, res) {
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

    const invoice = await Invoice.create({
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
    });

    if (invoice) {
      res.status(201).json({
        _id: invoice._id,
        invoiceDate: invoice.invoiceDate,
        paymentTerms: invoice.paymentTerms,
        address: {
          street: invoice.address.street,
          city: invoice.address.city,
          zipcode: invoice.address.zipcode,
          country: invoice.address.country
        },
        client: {
          name: invoice.client.name,
          email: invoice.client.email,
          address: {
            street: invoice.client.address.street,
            city: invoice.client.address.city,
            zipcode: invoice.client.address.zipcode,
            country: invoice.client.address.country
          }
        },
        status: invoice.status,
        projectDescription: invoice.projectDescription,
        itemList: invoice.itemList
      });
    }
  }
  catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
