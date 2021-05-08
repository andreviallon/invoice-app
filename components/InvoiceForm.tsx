import React, { useState } from 'react';
import * as Yup from 'yup';
import SectionHeader from './SectionHeader';
import ButtonIcon from './ButtonIcon';
import Button from './Button';
import axios from 'axios';
import { InvoiceType, paymentTermsOptions } from 'models/InvoiceTypes';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ButtonIconTypeEnum, ButtonTypeEnum } from '../models/ButtonTypes';
import { InvoiceStatusTypeEnum } from 'models/InvoiceStatusTypes';

interface Props {
    invoice?: InvoiceType;
    handleNewInvoice?: (invoice: InvoiceType) => void;
    closeModal: () => void;
}

const InvoiceForm: React.FC<Props> = ({ invoice, handleNewInvoice, closeModal }) => {
    const [status, setStatus] = useState(InvoiceStatusTypeEnum.PENDING);

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
        invoiceDate: invoice?.invoiceDate ? invoice.invoiceDate : '',
        paymentTerms: invoice?.paymentTerms ? invoice.paymentTerms : paymentTermsOptions[0],
        projectDescription: invoice?.projectDescription ? invoice.projectDescription : '',
        itemList: invoice?.itemList ? invoice.itemList : [{ name: '', quantity: 1, price: 100 }],
        numberOfItems: invoice?.itemList ? invoice.itemList.length : 1
    };

    const validationSchema = Yup.object().shape({
        streetAddress: Yup.string().required('Field is invalid'),
        city: Yup.string().required('Field is invalid'),
        zipcode: Yup.string().required('Field is invalid'),
        country: Yup.string().required('Field is invalid'),
        clientName: Yup.string().required('Field is invalid'),
        clientEmail: Yup.string().email().required('Field is invalid'),
        clientStreetAddress: Yup.string().required('Field is invalid'),
        clientCity: Yup.string().required('Field is invalid'),
        clientZipcode: Yup.string().required('Field is invalid'),
        clientCountry: Yup.string().required('Field is invalid'),
        invoiceDate: Yup.date().required('Field is invalid'),
        paymentTerms: Yup.string().required('Field is invalid'),
        projectDescription: Yup.string().required('Field is invalid'),
        itemList: Yup.array().of(
            Yup.object().shape({
                name: Yup.string().required('Field is invalid'),
                quantity: Yup.number().required('Field is invalid'),
                price: Yup.number().required('Field is invalid'),
                total: Yup.number()
            })
        )
    });

    const onSubmit = async (values, { resetForm }) => {
        let newInvoice: InvoiceType = {
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
            status: invoice.status ? invoice.status : status,
            projectDescription: values.projectDescription,
            itemList: values.itemList,
        }

        if (invoice?._id) {
            newInvoice._id = invoice._id;
            putInvoice(newInvoice, resetForm);
        }

        if (!invoice?._id) {
            postInvoice(newInvoice, resetForm);
        }
    };

    const putInvoice = async (newInvoice, resetForm) => {
        try {
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.put(`/api/invoices/${newInvoice._id}`, newInvoice, config);

            console.log('res', res.data);

            closeModal();
            resetForm({});
            handleNewInvoice(res.data.data);
        } catch (error) {
            console.error('Something went wrong...', error);
        }
    };

    const postInvoice = async (newInvoice, resetForm) => {
        try {
            const config = {headers: { 'Content-Type': 'application/json' }};
            const res = await axios.post('/api/invoices', newInvoice, config);

            closeModal();
            resetForm({});
            handleNewInvoice(res.data);
        } catch (error) {
            console.error('Something went wrong...', error);
        }
    };

    const inputClasses = `
        border-secondary-light border rounded mt-2 px-4 py-6 text-xs font-bold text-secondary-veryDark appearance-none
        dark:border-primary-dark dark:bg-primary-dark dark:text-white
        focus:border-primary-regular focus:outline-none`
        ;

    const labelClasses = 'text-secondary-dark text-xs font-medium dark:text-secondary-light';

    const errorClasses = 'error mt-2 text-sm font-medium';

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {props => {
                const { values, handleChange, isValid, dirty, handleSubmit, resetForm } = props;

                const [numberOfListItem, setNumberOfListItem] = useState(1);

                const addListItem = () => {
                    setNumberOfListItem(numberOfListItem + 1);
                    values.itemList.push({ name: '', quantity: 1, price: 100 });
                }

                const removeListItem = (index: number) => {
                    setNumberOfListItem(numberOfListItem - 1);
                    values.itemList.splice(index, 1);
                }

                const calculateTotalPrice = (quantity, price): number => !quantity || !price ? 0 : quantity * price;

                return (
                    <Form className="pb-8">
                        <h1 className="mb-8 text-h1 font-bold text-black dark:text-white">
                            {invoice?._id ? 'Edit Invoice' : 'New Invoice'}
                        </h1>

                        <SectionHeader text="Bill From" />

                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Street Address</label>
                            <Field name="streetAddress" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="streetAddress" component="p" className={errorClasses} />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>City</label>
                                <Field name="city" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="city" component="p" className={errorClasses} />
                            </div>
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Zipcode</label>
                                <Field name="zipcode" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="zipcode" component="p" className={errorClasses} />
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Country</label>
                                <Field name="country" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="country" component="p" className={errorClasses} />
                            </div>
                        </div>

                        <SectionHeader text="Bill To" />
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Client Name</label>
                            <Field name="clientName" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientName" component="p" className={errorClasses} />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Client Email</label>
                            <Field name="clientEmail" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientEmail" component="p" className={errorClasses} />
                        </div>
                        <div className="mb-6 flex flex-col">
                            <label className={labelClasses}>Street Address</label>
                            <Field name="clientStreetAddress" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                            <ErrorMessage name="clientStreetAddress" component="p" className={errorClasses} />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>City</label>
                                <Field name="clientCity" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientCity" component="p" className={errorClasses} />
                            </div>
                            <div className="col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Zipcode</label>
                                <Field name="clientZipcode" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientZipcode" component="p" className={errorClasses} />
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Country</label>
                                <Field name="clientCountry" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="clientCountry" component="p" className={errorClasses} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                            <div className="col-span-2 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Invoice Date</label>
                                <Field name="invoiceDate" type="date" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="invoiceDate" component="p" className={errorClasses} />
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
                                <ErrorMessage name="paymentTerms" component="p" className={errorClasses} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 sm:col-span-1 mb-6 flex flex-col">
                                <label className={labelClasses}>Project Description</label>
                                <Field name="projectDescription" type="text" className={inputClasses} onChange={e => handleChange(e)} />
                                <ErrorMessage name="projectDescription" component="p" className={errorClasses} />
                            </div>
                        </div>

                        <SectionHeader text="Item List" />
                        <div className="grid grid-cols-12 gap-x-8">
                            <FieldArray name="itemList">
                                {() => (values.itemList.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="col-span-12 sm:col-span-5 mb-6">
                                                <label className={labelClasses}>Item Name</label>
                                                <Field name={`itemList.${index}.name`} className={`${inputClasses} appearance-none`} type="text" />
                                                <ErrorMessage name={`itemList.${index}.name`} component="p" className={errorClasses} />
                                            </div>
                                            <div className="col-span-2 mb-6">
                                                <label className={labelClasses}>Qty.</label>
                                                <Field name={`itemList.${index}.quantity`} className={inputClasses} type="number" />
                                                <ErrorMessage name={`itemList.${index}.quantity`} component="p" className={errorClasses} />
                                            </div>
                                            <div className="col-span-2 mb-6">
                                                <label className={labelClasses}>Price</label>
                                                <Field name={`itemList.${index}.price`} className={inputClasses} type="number" />
                                                <ErrorMessage name={`itemList.${index}.price`} component="p" className={errorClasses} />
                                            </div>
                                            <div className="col-span-2 mb-6">
                                                <p className={labelClasses}>Total</p>
                                                <p className="text-secondary-dark font-bold mb-2 dark:text-secondary-light mt-8">
                                                    $ {calculateTotalPrice(item.quantity, item.price)}
                                                </p>
                                            </div>
                                            <div className="col-span-1 mb-6 flex justify-center mt-12 pt-2">
                                                <FontAwesomeIcon className="text-secondary-dark font-bold mb-2 dark:text-secondary-light hover:text-danger-regular cursor-pointer" icon={faTrash} onClick={() => removeListItem(index)} />
                                            </div>
                                        </React.Fragment>
                                    );
                                }))}
                            </FieldArray>
                        </div>
                        <div className="col-span-12">
                            <ButtonIcon text='Add New Item' buttonType={ButtonIconTypeEnum.SECONDARY} icon={faPlus} buttonClick={() => addListItem()} />
                        </div>

                        {invoice ? (
                            <div className="col-span-12 mt-10 flex justify-end">
                                <Button text="Cancel" submit={true} buttonType={ButtonTypeEnum.SECONDARY} buttonClick={closeModal} />
                                <div className="ml-2">
                                    <Button text="Save Changes" submit={true} buttonType={ButtonTypeEnum.PRIMARY} disabled={!(isValid && dirty)} />
                                </div>
                            </div>
                        ) : (
                            <div className="col-span-12 mt-10 flex justify-between">
                                <Button text="Discard" buttonType={ButtonTypeEnum.SECONDARY} buttonClick={() => {closeModal(); resetForm({})}} />
                                <div className="flex">
                                    <Button text="Save as Draft" submit={true} buttonType={ButtonTypeEnum.TERTIARY} buttonClick={() => setStatus(InvoiceStatusTypeEnum.DRAFT)} />
                                    <div className="ml-2">
                                        <Button text="Save & Send" submit={true} buttonType={ButtonTypeEnum.PRIMARY} disabled={!(isValid && dirty)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </Form>
                );
            }}
        </Formik>
    )
}

export default InvoiceForm