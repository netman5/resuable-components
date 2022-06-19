import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, children }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    setTimeout(() => {
      setShow(show);
    }, 3000);
  });

  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section>
        {children}
      </section>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
