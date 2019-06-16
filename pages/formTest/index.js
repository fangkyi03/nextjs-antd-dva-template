import React, { Component } from 'react'
import createDva from '../../command/createDva';
import FormView from '../../components/FormView/index';
import { Button } from 'antd';
import apiTool from '../../command/apiTool';

@createDva([])
export default class FormTest extends Component {

  constructor(props) {
      super(props);
      this.formDataArr = [
          {
              name: '测试编辑框',
              type: 'input',
              key: 'a1'
          }
      ]
      this.formArr = Array(2).fill({}).map((e,i)=>{
        const Form = createDva(['formTest' + (i + 1)])(FormView)
        return <Form data={this.formDataArr}/>
      })
  }
  
  onSetValue = (index) =>{
    apiTool.setValue(this,'formTest' + index,{
      dataSource:{a1:1}
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('表单修改不会影响自身页面刷新')
  }

  onClear = () => {
    apiTool.setValue(this, 'formTest1', {
      dataSource: { a1: '', a2: '' }
    })
    apiTool.setValue(this, 'formTest2', {
      dataSource: { a1: '', a2: '' }
    })
  }

  render() {
    return (
      <div>
        <div>
          本例子演示表单formView共用同一个formData
        </div>
        <Button onClick={()=>this.onSetValue(1)}>
          修改测试1编辑框数据
        </Button>
        <Button onClick={()=>this.onSetValue(2)}>
          修改测试2编辑框数据
        </Button>
        <Button onClick={this.onClear}>清空数据</Button>
        {this.formArr}
      </div>
    )
  }
}
