import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Toggle } from '../../Utilities';

export default class ModalButton extends Component {
  static defaultProps = {
    className: null,
    closeOnOutsideClick: true
  }

  render() {
    const {
      buttonClassName,
      children,
      closeOnOutsideClick,
      label,
      modalClassName
    } = this.props;

    return (
      <Toggle>
      {({on, toggle}) => (
        <Fragment>
          <button
            className={buttonClassName}
            onClick={toggle}>{label}
          </button> 
          <Modal
            closeOnOutsideClick={closeOnOutsideClick}
            modalClassName={modalClassName}
            on={on}
            toggle={toggle}
          >
            {children}
          </Modal>
        </Fragment>
      )}
      </Toggle>
    )
  }
}

ModalButton.propTypes = {
  buttonClassName: PropTypes.string,
  closeOnOutsideClick: PropTypes.bool,
  label: PropTypes.string,
  modalClassName: PropTypes.string,
}
