import dbConnect from '../../../utils/dbConnect';
import Invoice from '../../../models/Invoice';

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const invoices = await Invoice.find({})
        console.log('invoices =>', invoices);
        res.status(200).json({ success: true, data: invoices })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const invoice = await Invoice.create(
          req.body
        )
        res.status(201).json({ success: true, data: invoice })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}