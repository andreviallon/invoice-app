import Image from 'next/image';


const NoInvoice = () => {
    return (
        <div className="flex flex-col items-center">
            <Image src="/email_campaign.svg" alt="Avatar" layout="fixed" width={200} height={200} />
            <div className="text-center">
                <h3 className="text-secondary-veryDark text-lg font-bold mb-6">
                    There is nothing here
                </h3>
                <p className="text-sm font-medium text-secondary-regular">
                    Create an invoice by clicking the <br />
                    <span className="font-bold">New Invoice</span> button and get started
                </p>
            </div>
        </div>
    )
}

export default NoInvoice