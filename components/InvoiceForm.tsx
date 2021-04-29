import { InvoiceType, paymentTermsOptions } from 'models/InvoiceTypes';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SectionHeader from './SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import ButtonIcon from './ButtonIcon';
import { ButtonIconTypeEnum, ButtonTypeEnum } from '../models/ButtonTypes';
import Button from './Button';

interface Props {
    invoice?: InvoiceType;
    submitInvoice: (invoice: InvoiceType) => void;
}

const InvoiceForm: React.FC<Props> = ({ invoice, submitInvoice }) => {
    const initialValues = {
        streetAddress: invoice?.address.street ? invoice.address.street : '',
        city: invoice?.address.city ? invoice.address.city : '',
        zipcode: invoice?.address.zipcode ? invoice.address.zipcode : '',
        country: invoice?.address.country ? invoice.address.country : '',
        clientName: invoice?.client.name ? invoice.client.name : '',
        clientEmail: invoice?.client.email ? invoice.client.email : '',
        clientStreetAddress: invoice?.client.address.street ? invoice.client.address.street : '',
        clientCity: invoice?.client.address.city ? invoice.client.address.city : '',
        clientZipcode: invoice?.client.address.zipcode ? invoice.client.address.zipcode : '',
        clientCountry: invoice?.client.address.country ? invoice.client.address.country : '',
        invoiceDay: invoice?.invoiceDate ? invoice.invoiceDate : new Date(),
        paymentTerms: invoice?.paymentTerms ? invoice.paymentTerms : paymentTermsOptions[0],
        projectDescription: invoice?.projectDescription ? invoice.projectDescription : '',
        itemList: invoice?.itemList ? invoice.itemList : [{ name: '', quantity: 1, price: 100, total: 100 }],
        numberOfItems: invoice?.itemList ? invoice.itemList.length : 1
    };

    const validationSchema = Yup.object().shape({
        streetAddress: Yup.string().required('Street address is required'),
        city: Yup.string().required('City is required'),
        zipcode: Yup.string().required('Zipcode is required'),
        country: Yup.string().required('Country is required'),
        clientName: Yup.string().required('Client name is required'),
        clientEmail: Yup.string().email().required('Client email is required'),
        clientStreetAddress: Yup.string().required('Client street address is required'),
        clientCity: Yup.string().required('Client city is required'),
        clientZipcode: Yup.string().required('Client zipcode is required'),
        clientCountry: Yup.string().required('Client country is required'),
        invoiceDay: Yup.date().required('Invoice date is required'),
        paymentTerms: Yup.string().required('Payment terms is required'),
        projectDescription: Yup.string().required('Project description is required'),
        itemList: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Item name is required'),
                quantity: Yup.number().required('Item quantity is required'),
                price: Yup.number().required('Item price is required'),
                total: Yup.number()
            })
        )
    });

    const formatInvoice = (values) => {
        let newInvoice: InvoiceType = {
            _id: invoice._id,
            address: {
                street: values.streetAddress,
                city: values.city,
                zipcode: values.zipcode,
                country: values.country
            },
            client: {
                name: values.clientName,
                email: values.clientEmail,
                address: {
                    street: values.clientStreetAddress,
                    city: values.clientCity,
                    zipcode: values.clientZipcode,
                    country: values.clientCountry
                }
            },
            invoiceDate: values.invoiceDate,
            paymentTerms: values.paymentTerms,
            projectDescription: values.projectDescription
        }

        for (const item of values.itemList) {
            newInvoice.itemList.push(item);
        }

        submitInvoice(newInvoice);
    }

    const inputClasses = `
        border-secondary-light border rounded mt-2 px-4 py-6 text-xs font-bold text-secondary-veryDark appearance-none
        dark:border-primary-dark dark:bg-primary-dark dark:text-white
        focus:border-primary-regular focus:outline-none`
    ;

    const labelClasses = 'text-secondary-dark text-xs font-medium dark:text-secondary-light';

    const errorClasses = 'error mt-2 text-sm font-medium';

    return (
        <Formik initialValues={initialValues} onSubmit={values => formatInvoice(values)} validationSchema={validationSchema}>
            {props => {
                const { values, handleChange, handleSubmit } = props;

                const onChangeItemList = (itemList) => {
                    console.log('values', values);
                    console.log('itemList', itemList);
                }

                return (
                    <Form className="pb-8">
                        <h1 className="mb-8 text-h1 font-bold text-black dark:text-white">
                            {invoice?._id ?  'Edit Invoice': 'New Invoice'}
                        </h1>
                        
                        <SectionHeader text="Bill From" />
                        
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Street Address</label>
                            <Field name="streetAddress" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="streetAddress" component="p" className={errorClasses}/>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>City</label>
                                <Field name="city" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="city" component="p" className={errorClasses}/>
                            </div>
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Zipcode</label>
                                <Field name="zipcode" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="zipcode" component="p" className={errorClasses}/>
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Country</label>
                                <Field name="country" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="country" component="p" className={errorClasses}/>
                            </div>
                        </div>

                        <SectionHeader text="Bill To" />
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Client Name</label>
                            <Field name="clientName" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientName" component="p" className={errorClasses}/>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Client Email</label>
                            <Field name="clientEmail" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientEmail" component="p" className={errorClasses}/>
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Street Address</label>
                            <Field name="clientAddress" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientAddress" component="p" className={errorClasses}/>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>City</label>
                                <Field name="clientCity" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientCity" component="p" className={errorClasses}/>
                            </div>
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Zipcode</label>
                                <Field name="clientZipcode" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientZipcode" component="p" className={errorClasses}/>
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Country</label>
                                <Field name="clientCountry" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientCountry" component="p" className={errorClasses}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Invoice Date</label>
                                <Field name="invoiceDay" type="date" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="invoiceDay" component="p" className={errorClasses}/>
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Payment Terms</label>
                                <Field name="paymentTerms">
                                    {({ field }) => (
                                        <select {...field} className={inputClasses} onChange={e => handleChange(e)}>
                                            {paymentTermsOptions.map(option => (
                                                <option key={option} value={option} label={option} className="capitalize" />
                                            ))}
                                        </select>
                                    )}
                                    </Field>
                                <ErrorMessage name="paymentTerms" component="p" className={errorClasses}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Project Description</label>
                                <Field name="projectDescription" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="projectDescription" component="p" className={errorClasses}/>
                            </div>
                        </div>

                        <SectionHeader text="Item List" />
                        {/* <div className="grid grid-cols-12 gap-x-8">
                            {values.itemList.map((list, index) => (
                                <React.Fragment key={index}>
                                    <div className="col-span-12 sm:col-span-5 mb-6">
                                        <InputField
                                            label='Item Name'
                                            name='itemList.name'
                                            value={list.name}
                                            error={errors.projectDescription}
                                            touched={touched.projectDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    <div className="col-span-2 mb-6">
                                        <InputField
                                            label='Qty.'
                                            name='item'
                                            value={list.quantity}
                                            error={errors.projectDescription}
                                            touched={touched.projectDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    <div className="col-span-2 mb-6">
                                        <InputField
                                            label='Price'
                                            name='itemPrice'
                                            value={list.price}
                                            error={errors.projectDescription}
                                            touched={touched.projectDescription}
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                    </div>
                                    <div className="col-span-2 mb-6">
                                        <p className={labelClasses}>Total</p>
                                        <p className="text-secondary-dark font-bold mb-2 dark:text-secondary-light mt-8">$ 100</p>
                                    </div>
                                    <div className="col-span-1 mb-6 flex items-center justify-center mt-8 cursor-pointer">
                                        <FontAwesomeIcon className="text-secondary-dark font-bold mb-2 dark:text-secondary-light" icon={faTrash} />
                                    </div>
                                </React.Fragment>
                            ))}
                        </div> */}

                        <div className="col-span-12">
                            <ButtonIcon text='Add New Item' buttonType={ButtonIconTypeEnum.SECONDARY} icon={faPlus} buttonClick={() => onChangeItemList(values.itemList)} />
                        </div>

                        <div className="col-span-12 mt-6 flex justify-between">
                            <Button text="Discard" buttonType={ButtonTypeEnum.SECONDARY} />
                            <div className="flex">
                                <Button text="Save as Draft" buttonType={ButtonTypeEnum.TERTIARY} />
                                <div className="ml-2">
                                    <Button text="Save & Send" buttonType={ButtonTypeEnum.PRIMARY} />
                                </div>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    )
}

export default InvoiceForm