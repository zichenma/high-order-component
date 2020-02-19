import React from 'react';

// 缺点： 比较复杂，唯一用得上得就是需要根据参数 WrappedComponent 的结构来渲染 props
// 使用代理方式功能更加清晰
const modifyPropsHOC = WrappedComponent =>
  class NewComponent extends WrappedComponent {
    componentWillMount() {
      // 修了 component 里的 componentWillMount!
      console.log('I am componentWillMont from HOC');
    }
    render() {
      const element = super.render();
      const newStyle = {
        color: element.type === 'div' ? 'red' : 'green'
      };
      const newProps = { ...this.props, style: newStyle };
      return React.cloneElement(element, newProps, element.props.children);
    }
  };

export default modifyPropsHOC;
