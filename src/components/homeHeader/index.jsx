import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
  }

  render() {
    return (
      <div className="home-header clear-fix">
        <div className="home-header-left float-left">
          <span>{this.props.cityName}</span>
          &nbsp;
          <i className="icon-angle-down"></i>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input maxLength={20} type="text" placeholder="请输入关键字"/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader