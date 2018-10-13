import React, { Component, Fragment } from 'react';
import { EUCookieNotice, Icon, Loading, Modal, ModalButton, Toggle } from '../../Utilities';
import './style.css';

import Form from '../../Utilities/Form';
import LoremIpsum from './LoremIpsum.jsx';

export default class Demo extends Component {
  render() {
    return (
      <div id="demo">

        <h1>Demos</h1>

        <p>To remove this content, simply remove the "Demo" component from Components/App/index.js.</p>

        <p>Alternatively, view Components/Demo/index.js for example markup.</p>

        <h2>Components</h2>

        <h3>Modal</h3>

        <ModalButton label="Aard ... ?">
          <h1>The Aardvarkening</h1>
        </ModalButton>

        <Toggle>
        {({on, toggle}) => (
          <Fragment>
            <button onClick={toggle}>Short Modal</button> 
            <Modal on={on} toggle={toggle}>
              <h1>OMIGOD</h1>
            </Modal>
          </Fragment>
        )}
        </Toggle>

        <Toggle>
        {({on, toggle}) => (
          <Fragment>
            <button onClick={toggle}>Lengthy Modal</button> 
            <Modal on={on} toggle={toggle} closeOnOutsideClick={false}>
              <LoremIpsum />
            </Modal>
          </Fragment>
        )}
        </Toggle>

        <h3>Form</h3>

        <p>Just an example form.</p>

        <Form />

        <h3>Icon</h3>

        <p>Usage:</p>
        <pre>&lt;Icon name="close" color="#000" /&gt;</pre>

        <ul id="icon-demos">
        <li title="x">
          <Icon name="x" color="#FFF" />
        </li>
        <li title="chevron-up">
          <Icon name="chevron-up" color="#FFF" />
        </li>
        <li title="chevron-down">
          <Icon name="chevron-down" color="#FFF" />
        </li>
        <li title="chevron-left">
          <Icon name="chevron-left" color="#FFF" />
        </li>
        <li title="chevron-right">
          <Icon name="chevron-right" color="#FFF" />
        </li>

        <li title="x-thin">
          <Icon name="x-thin" color="#FFF" />
        </li>
        <li title="chevron-thin-up">
          <Icon name="chevron-thin-up" color="#FFF" />
        </li>
        <li title="chevron-thin-down">
          <Icon name="chevron-thin-down" color="#FFF" />
        </li>
        <li title="chevron-thin-left">
          <Icon name="chevron-thin-left" color="#FFF" />
        </li>
        <li title="chevron-thin-right">
          <Icon name="chevron-thin-right" color="#FFF" />
        </li>

        <li title="x-small">
          <Icon name="x-small" color="#FFF" />
        </li>

        </ul>

        <h3>Loading</h3>

        <p>Made by <a href="https://samherbert.net/svg-loaders/">Sam Herbert</a> for everyone.</p>
        <p>Usage:</p>
        <pre>&lt;Loading name="tail-spin" color="#000" size=&#123;48&#125; /&gt;</pre>

        <ul id="loading-demos">
        <li style={{ background: '#1ABC9C' }} title="audio">
          <Loading name="audio" />
        </li>
        <li style={{ background: '#34495E' }} title="rings">
          <Loading name="rings" />
        </li>
        <li style={{ background: '#F39C12' }} title="grid">
          <Loading name="grid" />
        </li>
        <li style={{ background: '#9B59B6' }} title="hearts">
          <Loading name="hearts" />
        </li>
        <li style={{ background: '#3498DB' }} title="oval">
          <Loading name="oval" />
        </li>
        <li style={{ background: '#E74C3C' }} title="three-dots">
          <Loading name="three-dots" />
        </li>
        <li style={{ background: '#2ECC71' }} title="spinning-circles">
          <Loading name="spinning-circles" />
        </li>
        <li style={{ background: '#2C3E50' }} title="puff">
          <Loading name="puff" />
        </li>
        <li style={{ background: '#F1C40F' }} title="circles">
          <Loading name="circles" />
        </li>
        <li style={{ background: '#8E44AD' }} title="tail-spin">
          <Loading name="tail-spin" />
        </li>
        <li style={{ background: '#2980B9' }} title="bars">
          <Loading name="bars" />
        </li>
        <li style={{ background: '#E74C3C' }} title="ball-triangle">
          <Loading name="ball-triangle" />
        </li>

        <li style={{ background: '#1ABC9C' }} title="spinner">
          <Loading name="spinner" />
        </li>
        <li style={{ background: '#34495E' }} title="">
        </li>
        <li style={{ background: '#F39C12' }} title="">
        </li>
        <li style={{ background: '#9B59B6' }} title="">
        </li>

        </ul>

        <h3>Cookie</h3>

        <p><strong>Cookie</strong> is a Higher-Order Component containing generic logic for getting, setting, deleting, and checking the existence of cookies.</p>

        <p>For example code, see the included <strong>EUCookieNotice</strong> component, demonstrated here.</p>

        <EUCookieNotice />

      </div>
    );
  }
}
