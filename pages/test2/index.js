import React, { Component } from 'react'
import { Button } from 'antd';
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';
import api from '../../command/api';
import LoadingComponent from '../../components/LoadComponent/index';

@createDva(['Test3'])
export default class Test3 extends Component {

  componentDidMount() {
    // 演示带参数请求
    const routerParams = apiTool.getRouterParams(this)
    if (routerParams.id) {
        apiTool.send(this, [
            {
                url: '/sug?code=utf-8&q=' + routerParams.id,
                method: 'GET',
                target: 'Test3',
                tranData: ({ result }) => {
                    return { a: result }
                }
            },
        ])
    }else {
        // 如果没有参数直接手动去除loading
        apiTool.setValue(this,'Test3',{isShow:false})
    }
  }

  onNetTest1 = () =>{
    apiTool.send(this,[
        {
            url:'/sug?code=utf-8&q=1',
            method:'GET',
            target:'Test3',
        }
    ])
  }

  onNetTest2 = () => { 
    // 这里可以同时进行多个请求 如果target相同 那么请求的结果会进行合并 页面只会刷新一次
    apiTool.send(this,[
        {
            url: '/sug?code=utf-8&q=1',
            method: 'GET',
            target: 'Test3',
            tranData:({result})=>{
                return {a:result}
            }
        },
        {
            url: '/sug?code=utf-8&q=1',
            method: 'GET',
            target: 'Test3',
            tranData:({result})=>{
                return {b:result}
            }
        },
        {
            url: '/sug?code=utf-8&q=1',
            method: 'GET',
            target: 'Test3',
            tranData: ({ result }) => {
                return { c: result }
            }
        }
    ])
  }

  renderList = (result) =>{
      return result.map((e) => {
        return (
            <div>{e.map((el) => {
                return (
                    <div>{el}</div>
                )
            })}</div>
        )
    })
  }

  onNetTest3 = () =>{
    apiTool.send(this,[
        api.test('Test3').getList()({
            // 如果接口不符合要求 或者同名target中 有返回相同名称的数据 那么可以在这里进行转换 否则相同名称的会被合并
            tranData: ({ result }) => {
                return { d: result, a: [], b: [], c: [], result:[] }
            },
            // 每个单条接口如果想捕获成功或者失败都可以直接写 单条onError 捕获错误以后 全局的onError不会执行 具体可见createDva
            onCallBack:()=>{
                console.log('接口成功')
            },
            onError:()=>{
                console.log('接口失败')
            }
        })
    ])
  }

  renderView = () =>{
    const {a,b,c,d,result} = this.props
    return (
      <div>
        <Button onClick={this.onNetTest1}>接口测试写法1</Button>
        <Button onClick={this.onNetTest2}>接口测试写法2</Button>
        <Button onClick={this.onNetTest3}>接口测试美化写法</Button>
        {result && this.renderList(result)}
        {a && this.renderList(a)}
        {b && this.renderList(b)}
        {c && this.renderList(c)}
        {d && this.renderList(d)}
      </div>
    )
  }

  render() {
    const {isShow} = this.props
    return (
        <LoadingComponent
            isShow={isShow}
            renderView={this.renderView}
        />
    )
  }
}
