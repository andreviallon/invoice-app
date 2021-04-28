import { InvoiceType, paymentTermsOptions } from 'models/InvoiceTypes';
import { Formik } from 'Formik';
import InputField from './InputField';
import * as Yup from 'yup';
import SectionHeader from './SectionHeader';
import InputDatePicker from './InputDatePicker';
import InputSelect from './InputSelect';
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
    return (
        <Formik
            initialValues={{
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
                itemList: invoice?.itemList ? invoice.itemList : [],
                numberOfItems: invoice?.itemList ? invoice.itemList.length : 1,
            }}
            onSubmit={values => formatInvoice(values)}
            validationSchema={Yup.object().shape({
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
            })}
        >
            {props => {
                const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

                const onSubmit = () => {
                    console.log('onSubmit');
                }

                const onChangeItemList = (itemList) => {
                    console.log('itemList', itemList);
                    /* const numberOfItems = e.target.value || 0;
                    const previousNumber = parseInt(field.value || '0');
                    if (previousNumber < numberOfItems) {
                        for (let i = previousNumber; i < numberOfItems; i++) {
                            itemList.push({ itemName: '', quantity: 1, price: 100 });
                        }
                    } else {
                        for (let i = previousNumber; i >= numberOfItems; i--) {
                            itemList.splice(i, 1);
                        }
                    }
                    setValues({ ...values, itemList });
            
                    field.onChange(e); */
                }

                const onDiscard = () => {
                    console.log('onDiscard');
                }

                const onSaveAsDraft = () => {
                    console.log('onSaveAsDraft');
                }

                return (
                    <form className="pb-8">
                        <h1 className="mb-8 text-h1 font-bold text-black dark:text-white">
                            {invoice?._id ?  'Edit Invoice': 'New Invoice'}
                        </h1>
                        <SectionHeader text="Bill From" />
                        <div className="mb-6">
                            <InputField
                                label='Street Address'
                                name='streetAddress'
                                value={values.streetAddress}
                                error={errors.streetAddress}
                                touched={touched.streetAddress}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6">
                                <InputField
                                    label='City'
                                    name='city'
                                    value={values.city}
                                    error={errors.city}
                                    touched={touched.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-1 mb-6">
                                <InputField
                                    label='Zipcode'
                                    name='zipcode'
                                    value={values.zipcode}
                                    error={errors.zipcode}
                                    touched={touched.zipcode}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6">
                                <InputField
                                    label='Country'
                                    name='country'
                                    value={values.country}
                                    error={errors.country}
                                    touched={touched.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                        </div>

                        <SectionHeader text="Bill To" />
                        <div className="mb-6">
                            <InputField
                                label='Client Name'
                                name='clientName'
                                value={values.clientName}
                                error={errors.clientName}
                                touched={touched.clientName}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        <div className="mb-6">
                            <InputField
                                label='Client email'
                                name='clientEmail'
                                value={values.clientEmail}
                                error={errors.clientEmail}
                                touched={touched.clientEmail}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        <div className="mb-6">
                            <InputField
                                label='Street Address'
                                name='clientStreetAddress'
                                value={values.clientStreetAddress}
                                error={errors.clientStreetAddress}
                                touched={touched.clientStreetAddress}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8">
                            <div className="col-span-1 mb-6">
                                <InputField
                                    label='City'
                                    name='clientCity'
                                    value={values.clientCity}
                                    error={errors.clientCity}
                                    touched={touched.clientCity}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-1 mb-6">
                                <InputField
                                    label='Zipcode'
                                    name='clientZipcode'
                                    value={values.clientZipcode}
                                    error={errors.clientZipcode}
                                    touched={touched.clientZipcode}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6">
                                <InputField
                                    label='Country'
                                    name='clientCountry'
                                    value={values.clientCountry}
                                    error={errors.clientCountry}
                                    touched={touched.clientCountry}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                            <div className="col-span-2 sm:col-span-1 mb-6">
                                <InputDatePicker
                                    label='Invoice Date'
                                    name='invoiceDay'
                                    error={errors.clientCity}
                                    touched={touched.clientCity}
                                    selectedDate={values.invoiceDay}
                                    onChange={handleChange} />
                            </div>
                            <div className="col-span-2 sm:col-span-1 mb-6">
                                <InputSelect
                                    label='Payment Terms'
                                    name='paymentTerms'
                                    defaultSelectOption={values.paymentTerms}
                                    selectOptions={paymentTermsOptions}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.paymentTerms}
                                    touched={touched.paymentTerms} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 sm:col-span-1 mb-6">
                                <InputField
                                    label='Project Description'
                                    name='projectDescription'
                                    value={values.projectDescription}
                                    error={errors.projectDescription}
                                    touched={touched.projectDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                        </div>

                        <SectionHeader text="Item List" />
                        <div className="grid grid-cols-12 gap-x-8">
                            <div className="col-span-12 sm:col-span-5 mb-6">
                                <InputField
                                    label='Item Name'
                                    name='itemList.name'
                                    value={values.projectDescription}
                                    error={errors.projectDescription}
                                    touched={touched.projectDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-2 mb-6">
                                <InputField
                                    label='Qty.'
                                    name='item'
                                    value={values.projectDescription}
                                    error={errors.projectDescription}
                                    touched={touched.projectDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-2 mb-6">
                                <InputField
                                    label='Price'
                                    name='itemPrice'
                                    value={values.projectDescription}
                                    error={errors.projectDescription}
                                    touched={touched.projectDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                            </div>
                            <div className="col-span-2 mb-6">
                                <p className="text-secondary-dark text-xs font-medium mb-2 dark:text-secondary-light">Total</p>
                                <p className="text-secondary-dark font-bold mb-2 dark:text-secondary-light mt-8">$ 100</p>
                            </div>
                            <div className="col-span-1 mb-6 flex items-center justify-center mt-8 cursor-pointer">
                                <FontAwesomeIcon className="text-secondary-dark font-bold mb-2 dark:text-secondary-light" icon={faTrash} />
                            </div>
                            <div className="col-span-12">
                                <ButtonIcon text='Add New Item' buttonType={ButtonIconTypeEnum.SECONDARY} icon={faPlus} buttonClick={() => onChangeItemList(values.itemList)} />
                            </div>

                            <div className="col-span-12 mt-6 flex justify-between">
                                <Button text="Discard" buttonType={ButtonTypeEnum.SECONDARY} buttonClick={() => onDiscard()} />
                                <div className="flex">
                                    <Button text="Save as Draft" buttonType={ButtonTypeEnum.TERTIARY} buttonClick={() => onSaveAsDraft()} />
                                    <div className="ml-2">
                                        <Button text="Save & Send" buttonType={ButtonTypeEnum.PRIMARY} buttonClick={() => onSubmit()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                );
            }}
        </Formik>
    )
}

export default InvoiceForm