import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const InvoiceSchema = new mongoose.Schema({
    invoiceDate: {
        type: String
    },
    paymentTerms: {
        type: String
    },
    status: {
        type: String
    },
    projectDescription: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        zipcode: {
            type: String
        },
        country: {
            type: String
        }
    },
    client: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        address: {
            street: {
                type: String
            },
            city: {
                type: String
            },
            zipcode: {
                type: String
            },
            country: {
                type: String
            }
        }
    },
    itemList: [{
        name: {
            type: String,
            required: [true, 'Please provide a name for this invoice item.']
        },
        quantity: {
            type:  Number,
            required: [true, 'Please provide a quantity for this invoice item.']
        },
        price: {
            type:  Number,
            required: [true, 'Please provide a price for this invoice item.']
        },
        total: {
            type:  Number,
            required: [true, 'Please provide a total price for this invoice item.']
        }
    }]
})

export default mongoose.models.Invoice || mongoose.model('Invoice', InvoiceSchema)
