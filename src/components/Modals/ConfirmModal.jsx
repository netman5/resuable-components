import React from 'react';
import PropTypes from 'prop-types';

const ConfirmModal = ({
  message, openModal, closeModal,
}) => (
  <div>
    <div className="border w-90 mx-auto p-8">
      <div>
        <h4>{message}</h4>
        <div className="flex flex-row gap-5 w-80 border p-2">
          <button type="button" className="px-8 py-2 bg-green-500 text-white rounded-md font-semibold" onClick={openModal}>Yes</button>
          <button type="button" className="px-8 py-2 bg-red-500 text-white rounded-md font-semibold" onClick={closeModal}>cancel</button>
        </div>
      </div>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  message: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ConfirmModal;
