import { InvoiceType, PaymentTermsEnum } from 'models/InvoiceTypes';
import { Formik } from 'Formik';
import InputField from './InputField';
import * as Yup from 'yup';
import SectionHeader from './SectionHeader';
import InputDatePicker from './InputDatePicker';
import InputSelect from './InputSelect';

interface Props {
    invoice?: InvoiceType;
    submitInvoice: (invoice) => void;
}

const InvoiceForm:React.FC<Props> = ({ invoice, submitInvoice }) => {
    const paymentTermsOptions: PaymentTermsEnum[] = [
        PaymentTermsEnum.NEXT_DAY,
        PaymentTermsEnum.NEXT_WEEK,
        PaymentTermsEnum.NEXT_TWO_WEEKS,
        PaymentTermsEnum.NEXT_MONTH
    ];

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
                invoiceDay: invoice?.invoiceDate ? invoice.invoiceDate : '',
                paymentTerms: invoice?.paymentTerms ? invoice.paymentTerms : paymentTermsOptions[0],
                projectDescription: invoice?.projectDescription ? invoice.projectDescription : '',
                itemList: invoice?.itemList ? invoice.itemList : []
            }}
            onSubmit={values => submitInvoice(values)}
            validationSchema={Yup.object().shape({
                streetAddress: Yup.string().email().required('Street address is required'),
                city: Yup.string().email().required('City is required'),
                zipcode: Yup.string().email().required('Zipcode is required'),
                country: Yup.string().email().required('Country is required'),
                clientName: Yup.string().email().required('Client name is required'),
                clientEmail: Yup.string().email().required('Client email is required'),
                clientStreetAddress: Yup.string().email().required('Client street address is required'),
                clientCity: Yup.string().email().required('Client city is required'),
                clientZipcode: Yup.string().email().required('Client zipcode is required'),
                clientCountry: Yup.string().email().required('Client country is required'),
                invoiceDay: Yup.date().required('Invoice date is required'),
                paymentTerms: Yup.string().required('Payment terms is required'),
                projectDescription: Yup.string().required('Project description is required'),
                itemList: Yup.array()
            })}
        >
        {props => {
          const { values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset } = props;
          return (
            <form onSubmit={handleSubmit}>
                <SectionHeader text="Bill From" />
                <div className="mb-6">
                    <InputField
                        label='Street Address'
                        name ='streetAddress'
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
                            name ='city'
                            value={values.city}
                            error={errors.city}
                            touched={touched.city}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    <div className="col-span-1 mb-6">
                        <InputField
                            label='Zipcode'
                            name ='zipcode'
                            value={values.zipcode}
                            error={errors.zipcode}
                            touched={touched.zipcode}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    <div className="col-span-2 sm:col-span-1 mb-6">
                        <InputField
                            label='Country'
                            name ='country'
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
                        name ='clientName'
                        value={values.clientName}
                        error={errors.clientName}
                        touched={touched.clientName}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                </div>
                <div className="mb-6">
                    <InputField
                        label='Client email'
                        name ='clientEmail'
                        value={values.clientEmail}
                        error={errors.clientEmail}
                        touched={touched.clientEmail}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                </div>
                <div className="mb-6">
                    <InputField
                        label='Street Address'
                        name ='clientStreetAddress'
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
                            name ='clientCity'
                            value={values.clientCity}
                            error={errors.clientCity}
                            touched={touched.clientCity}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    <div className="col-span-1 mb-6">
                        <InputField
                            label='Zipcode'
                            name ='clientZipcode'
                            value={values.clientZipcode}
                            error={errors.clientZipcode}
                            touched={touched.clientZipcode}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                    </div>
                    <div className="col-span-2 sm:col-span-1 mb-6">
                        <InputField
                            label='Country'
                            name ='clientCountry'
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
                            selectedDate={values.invoiceDay}
                            onChange={handleChange}
                            error={errors.clientCity}
                            touched={touched.clientCity} />
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
            </form>
          );
        }}
      </Formik>
    )
}

export default InvoiceForm