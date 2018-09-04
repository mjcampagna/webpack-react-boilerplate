import React, { Component, Fragment } from 'react';

export default class Icon extends Component {
  static defaultProps = {
    color: '#333'
  }

  render() {
    switch( this.props.name ) {

      case 'x' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" fill={this.props.color} /></svg>
      );

      case 'x-thin' : return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" fill={this.props.color} /></svg>
      );

      case 'x-small' : return (
        <svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 12 12" width="12" height="12">
          <line x1="1" y1="11" x2="11" y2="1" stroke={this.props.color} strokeWidth="2" />
          <line x1="1" y1="1" x2="11" y2="11" stroke={this.props.color} strokeWidth="2" />
        </svg>     
      );

      case 'chevron-up' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" fill={this.props.color} /></svg>
      );

      case 'chevron-right' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" fill={this.props.color} /></svg>
      );

      case 'chevron-down' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" fill={this.props.color} /></svg>
      );

      case 'chevron-left' : return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill={this.props.color} /></svg>
      );

      case 'chevron-thin-up' : return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" fill={this.props.color} /></svg>
      );

      case 'chevron-thin-right' : return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" fill={this.props.color} /></svg>
      );

      case 'chevron-thin-down' : return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" fill={this.props.color} /></svg>
      );

      case 'chevron-thin-left' : return (
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" fill={this.props.color} /></svg>
      );

    }
  }
}
