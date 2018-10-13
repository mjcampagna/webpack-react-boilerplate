import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Transition, animated } from 'react-spring';
import { Icon, Portal } from '../';

import './style.css';

export default class Modal extends Component {
  static defaultProps = {
    closeOnOutsideClick: true,
    modalClassName: null,
    modalMaxWidth: 768,
  }

  componentDidUpdate() {
    if ( this.props.on ) {
      document.body.classList.add('overflow-hidden');
    } else {
      if ( document.body.classList.contains('overflow-hidden') ) {
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  render() {
    const {
      children,
      closeOnOutsideClick,
      modalClassName,
      modalMaxWidth,
      on,
      toggle
    } = this.props;

    return (
      <Portal>
        <Transition
          native 
          from={{
            opacity: 0
          }} 
          enter={{
            opacity: 1
          }} 
          leave={{
            opacity: 0, cursor: 'default', pointerEvents: 'none'
          }}
        >
          {on && ( styles => (
            <animated.div className={modalClassName} id="modal-container" style={styles}>
              <div id="modal-background"></div>
              <div id="modal-inner">
                <div
                  className={closeOnOutsideClick ? 'closeOnOutsideClick' : null}
                  id="modal-exit"
                  onClick={closeOnOutsideClick ? toggle : null}
                ></div>
                <div id="modal-card" style={{ maxWidth: modalMaxWidth }}>
                  <button id="modal-button--close" onClick={toggle}>
                    <Icon name="x-small" />
                  </button>
                  {children}
                </div>
              </div>
            </animated.div>
          ) )}
        </Transition>
      </Portal>
    );
  }
}

Modal.propTypes = {
  closeOnOutsideClick: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalMaxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  on: PropTypes.bool,
  toggle: PropTypes.func,
}
