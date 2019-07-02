import React, { Component } from 'react'
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';

@createDva(['MockTest'])
export default class MockTest extends Component {

  onMock1 = () => {
    apiTool.send(this, [
        {
            mock: 'getData',
            target: 'MockTest',
            // method:'POST' || 'GET'
            // 以后想用实际真实接口的时候 只需要增加url字段即可
            // 其余字段数据都可以被真实接口进行使用而不需要做额外处理
            // url:'/api/xxx'
        }
    ])   
  }

  onMock2 = () =>{
    apiTool.send(this, [
        {
            mock: 'getTestData',
            params: { a: '文章1', b: '文章2' },
            target: 'MockTest',
        }
    ])  
  }

  render() {
    const {list1 = [],list2 = []} = this.props
    return (
      <div style={{display:'flex',flexDirection:'column'}}>
        <div onClick={this.onMock1}>请求mock1</div>
        <div onClick={this.onMock2}>请求mock2</div>
        {list1.map((e,i)=>{
            return (
                <div key={i}>{e.title}</div>
            )
        })}
        {list2.map((e, i) => {
            return (
                <div key={i}>{JSON.stringify(e)}</div>
            )
        })}
      </div>
    )
  }
}
