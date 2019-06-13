import React, { Component } from 'react';
import { Spin } from 'antd';
import styles from './index.less'

class LoadingComponent extends Component {

	static defaultProps = {
		isShow: true
	}

	constructor(props) {
		super(props);
		this.state = {
			isShow: this.props.isShow == undefined ? true : this.props.isShow,
			isShowLoading: false
		};
		this.inital = false
	}

	componentDidMount() {
		this.inital = true
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.isShow == false && this.state.isShow == true && !this.isInital) {
			this.isInital = true
			this.setState({ isShow: nextProps.isShow, isShowLoading: false })
		} else {
			if (nextProps.isShow) {
				this.setState({
					isShowLoading: true
				})
			} else {
				this.setState({
					isShowLoading: false
				})
			}
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !nextState.isShow;
	}

	/**
	 * 渲染正常视图
	 *
	 * @memberof LoadingComponent
	 */
	renderNormalComponent = () => {
		return (
			<div style={{ flex: 1, display: 'flex',height:'100%',justifyContent:'center',alignItems:'center'}}>
				<Spin tip="页面加载中..." />
			</div>
		);
	}

	renderLoading = () =>{
		const { isShowLoading } = this.state
		if (!isShowLoading) {
			return null
		}
		return (
			<div className={styles.loading}>
				<Spin tip="页面加载中..." />
			</div>
		)
	}

	renderMainView = (Component) => {
		return (
			<div style={{ flex: 1,display:'flex',position:'relative',height:'100%' }}>
				{Component()}
				{this.renderLoading()}
			</div>
		)
	}

	render() {
		const { isShow } = this.state;
		const { renderComponent, renderView } = this.props;
		if (isShow) {
			return this.renderNormalComponent()
		}
		const renderViewComponent = renderView || renderComponent
		return this.renderMainView(renderViewComponent);
	}
}

export default LoadingComponent;
