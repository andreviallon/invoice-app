import mongoose from 'mongoose';
import InvoiceStatus from '../components/InvoiceStatus';
import { PaymentTermsEnum } from './InvoiceTypes';

/* PetSchema will correspond to a collection in your MongoDB database. */
const InvoiceSchema = new mongoose.Schema({
    index: {
        type: String,
        required: [true, 'Please provide an index for this invoice.']
    },
    invoiceDate: {
        type: Date,
        required: [true, 'Please provide an date for this invoice.']
    },
    paymentTerms: {
        type: String,
        required: [true, 'Please provide a payment term for this invoice.']
    },
    status: {
        type: String,
        required: [true, 'Please provide a status for this invoice.']
    },
    projectDescription: {
        type: String,
        required: [true, 'Please provide a project description for this invoice.']
    },
    address: {
        street: {
            type: String,
            required: [true, 'Please provide an street address for this invoice.']
        },
        city: {
            type: String,
            required: [true, 'Please provide an city address for this invoice.']
        },
        zipcode: {
            type: String,
            required: [true, 'Please provide an zipcode address for this invoice.']
        },
        country: {
            type: String,
            required: [true, 'Please provide an country address for this invoice.']
        }
    },
    client: {
        name: {
            type: String,
            required: [true, 'Please provide a client name for this invoice.']
        },
        email: {
            type: String,
            required: [true, 'Please provide a client email for this invoice.']
        },
        address: {
            street: {
                type: String,
                required: [true, 'Please provide an client street address for this invoice.']
            },
            city: {
                type: String,
                required: [true, 'Please provide an client city address for this invoice.']
            },
            zipcode: {
                type: String,
                required: [true, 'Please provide an client zipcode address for this invoice.']
            },
            country: {
                type: String,
                required: [true, 'Please provide an client country address for this invoice.']
            }
        }
    }
})

export default mongoose.models.Invoice || mongoose.model('Invoice', InvoiceSchema)