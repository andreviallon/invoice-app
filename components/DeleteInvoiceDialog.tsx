import { useEffect } from 'react';
import { ButtonTypeEnum } from 'models/ButtonTypes';
import Button from './Button';

interface Props {
    showDeleteModal: boolean;
    setShowDeleteModal: () => void;
    deleteInvoice: () => void;
}

const DeleteInvoiceDialog: React.FC<Props> = ({ showDeleteModal, setShowDeleteModal, deleteInvoice }) => {
    useEffect(() => {
		showDeleteModal ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
	}, [showDeleteModal]);

    const modalBackground = (): string => {
        let classes = 'flex justify-center items-center bg-primary-dark bg-opacity-0 absolute right-0 left-0 top-0 bottom-0 z-10';

        if (showDeleteModal) classes = `${classes} bg-opacity-50`;

        return classes;
    }

    const deleteDialogContainerClasses = (): string => {
        return 'bg-white dark:bg-dark z-20 p-12 relative rounded-2xl';
    }

    const visibility = () => showDeleteModal ? 'block' : 'hidden';

    return (
        <div className={visibility()}>
        <div className="modal-window-container">
          <div className={modalBackground()} onClick={() => setShowDeleteModal()}>
            <div className={deleteDialogContainerClasses()}>
                <p className="text-dark dark:text-white text-h2 font-bold">Confirm Deletion</p>
                <p className="text-secondary-regular text-sm font-medium my-6 leading-6">Are you sure you want to delete this invoice? <br />This action cannot be undone.</p>
                <div className="flex flex-row justify-end">
                    <div className="mr-2">
                        <Button text='Cancel' buttonType={ButtonTypeEnum.SECONDARY} buttonClick={() => setShowDeleteModal()} />
                    </div>
                    <Button text='Delete' buttonType={ButtonTypeEnum.DANGER} buttonClick={() => deleteInvoice()} />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DeleteInvoiceDialog
