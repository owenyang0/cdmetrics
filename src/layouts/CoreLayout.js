import React from 'react'

import Header from 'components/Header'

import 'styles/core.scss'

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='cdmetrics'>
        <Header className='header'></Header>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
