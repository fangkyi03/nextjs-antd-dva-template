import React, { Component } from 'react'
import { Input, Form } from 'antd';

export default class FormInput extends Component {
  render() {
    const { getFieldDecorator} = this.props.form
    const { data } = this.props
    return (
      <Form.Item label={data.name}>
        {getFieldDecorator(data.key)(
          <Input placeholder={'请输入内容'} />
        )}
      </Form.Item>
    )
  }
}
