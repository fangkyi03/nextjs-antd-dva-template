import React, { Component } from 'react'
import apiTool from '../../command/apiTool';

export default class Test1 extends Component {
  render() {
    return (
      <div>
        输出当前路由参数
        {JSON.stringify(apiTool.getRouterParams(this))}
      </div>
    )
  }
}
