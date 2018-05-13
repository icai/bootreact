import React, { Component }from 'react';

export default class Container extends Component {
  static displayName = 'Container';

  render() {
    const { prefixCls, className, children, ...others } = this.props;
    return (
      <div className={className} {...others}>
        {children}
      </div>
    )
  }
}
