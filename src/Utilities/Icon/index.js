import React, { Component, Fragment } from 'react';

export default class Icon extends Component {
  static defaultProps = {
    color: '#333'
  }

  render() {
    switch( this.props.name ) {

      case 'close' : return (
        <svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 12 12" width="12" height="12">
          <line x1="1" y1="11" x2="11" y2="1" stroke={this.props.color} strokeWidth="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke={this.props.color} strokeWidth="2" />
        </svg>     
      );

      case 'arrow-up' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" fill={this.props.color} /></svg>
      );

      case 'arrow-right' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" fill={this.props.color} /></svg>
      );

      case 'arrow-down' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" fill={this.props.color} /></svg>
      );

      case 'arrow-left' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill={this.props.color} /></svg>
      );

    }
  }
}
