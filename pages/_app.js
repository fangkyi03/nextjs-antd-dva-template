/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { Container } from 'next/app'
import React from 'react'
import './app.less'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class AppComponent extends React.Component {

    getRouter = () => {
        const { router } = this.props
        if (typeof window == 'object') {
            if (window.location.search.indexOf('?') !== -1) {
                const obj = {}
                const searchArr = window.location.search.split('?')[1].split("&")
                searchArr.forEach((e, index) => {
                    const splitArr = e.split('=')
                    obj[splitArr[0]] = splitArr[1]
                })
                return obj
            } else {
                return {}
            }
        } else {
            return router.query
        }
    }

    render() {
        const { Component, pageProps,...arg } = this.props
        return (
            <Container>
                <LocaleProvider locale={zhCN}>
                    <Component {...pageProps} {...arg} routerParams={this.getRouter(arg)} />
                </LocaleProvider>
            </Container>
        )
    }
}

AppComponent.getInitialProps = (props) => {
    return props.Component.getInitialProps?props.Component.getInitialProps(props):{}
}

export default AppComponent