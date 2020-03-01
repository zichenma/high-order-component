import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const tabbarArr = [
  {
    img: 'icon-home',
    text: 'Home',
    link: '/home'
  },
  {
    img: 'icon-fenlei',
    text: 'Categories',
    link: '/category'
  },
  {
    img: 'icon-gouwuchekong',
    text: 'Cart',
    link: '/cart'
  },
  {
    img: 'icon-yonghu',
    text: 'User',
    link: '/user'
  }
];
class Tabbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  itemChange = i => {
    this.setState({
      ...this.state,
      index: i
    })
  }
  render() {
    const url = window.location.href;
    return (
      <div className="tabbar">
        <div className='tabbar-content'>
          {
            tabbarArr.map((v, i) => (
                <Link to={v.link} key={i} className={`tabbar-item ${(url.indexOf(v.link) > -1 ? 'active' : '')}`}>
                <div className={`iconfont ${v.img}`} />
                <div>{v.text}</div>
                </Link>
              ))
          }
        </div>
      </div>
    )
  }
}
export default Tabbar;
