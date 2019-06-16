import React, { Component } from 'react'
import FormInput from './FormInput/index';
import { Form } from 'antd';

@Form.create({
  mapPropsToFields:(props)=>{
    const obj = {}
    Object.keys(props.dataSource || {}).forEach((e)=>{
      obj[e] = Form.createFormField({
        value:props.dataSource[e]
      })
    })
    return obj
  }
})
export default class FormView extends Component {

  renderFormChildren = (item,i) =>{
    switch (item.type) {
      case 'input':
        return <FormInput data={item} key={i} form={this.props.form}/>
    }
  }

  renderForm = (data) =>{
    return (
      <div>
        {data.map((e,i)=>{
          return this.renderFormChildren(e,i)
        })}
      </div>
    )
  }

  render() {
    const {data} = this.props
    return (
      <div>
        {this.renderForm(data)}
      </div>
    )
  }
}
