import React, { Component } from 'react'
import {Modal} from 'antd'
import createDva from '../../command/createDva';
import apiTool from '../../command/apiTool';

export default class FormModal extends Component {

  onCancel = () =>{
    apiTool.hiddenModal(this,this.props.modelList[0])
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('更新生命周期开始', this.props.modelList[0],this.props.title)
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('更新生命周期结束', this.props.modelList[0], this.props.title)
  }
  
  render() {
    const {isShowModal} = this.props
    return (
        <Modal
            onCancel={this.onCancel}
            visible={isShowModal}
        >
          <div>当前页面标题</div>
          <div>{this.props.title}</div>
        </Modal>
    )
  }
}
