import React, { PureComponent } from 'react';
import './index.css'

const tabbarArr = [
  {
    img: 'icon-home',
    text: 'Home'
  },
  {
    img: 'icon-fenlei',
    text: 'Categories'
  },
  {
    img: 'icon-gouwuchekong',
    text: 'Cart'
  },
  {
    img: 'icon-yonghu',
    text: 'User'
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
    return (
      <div className="tabbar">
        <div className='tabbar-content'>
          {
            tabbarArr.map((v, i) => (
                <div key={i} className={`tabbar-item ${(this.state.index === i ? 'active' : '')}`} onClick={() => this.itemChange(i)}>
                <div className={`iconfont ${v.img}`} />
                <div>{v.text}</div>
                </div>
              ))
          }
        </div>
      </div>
    )
  }
}
export default Tabbar;
