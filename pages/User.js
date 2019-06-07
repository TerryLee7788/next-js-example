import React from 'react';
import withWrap from '../hoc/withWrap';
import Router from 'next/router'

class User extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            showLoading: false
        };

    }

    static async getInitialProps ({ req, ctx }) {

        let data = {};

        console.log('csr');

        await new Promise((resolve) => {
            setTimeout(() => {

                resolve();
                data.gggg = 'ggg';
                console.log('ggyy: ', this);

            }, 5000)
        })
        // if (Component.getInitialProps) {
        //     pageProps = await Component.getInitialProps(ctx)
        // }

        return { data, json, pageProps };
    }

    showLog = () => {

        console.log(1111);

    }

    stopLoading = async () => {

        console.log('stopLoading');
        await new Promise((res) => {

            setTimeout(() => {

                res();

                console.clear();

            }, 3000);

        })

        this.setState({
            showLoading: false
        });

    }

    showLoading = () => {

        console.log('showLoading');

        this.setState({
            showLoading: true
        });

    }

    componentWillUnmount () {

        console.log('componentWillUnmount =====');
        Router.events.off('routeChangeStart', this.showLoading);
        Router.events.off('routeChangeComplete', this.stopLoading);

    }

    componentDidMount () {

        console.log('===== componentDidMount');
        Router.events.on('routeChangeStart', this.showLoading);
        Router.events.on('routeChangeComplete', this.stopLoading);

    }

    render () {

        console.log('this.props: ', this.props);

        return (
            <div>
                hi: {this.props.name}
                {
                    this.state.showLoading
                        ? (<div>loading...</div>)
                        : (null)
                }
            </div>
        );
    }

}

export default withWrap(User);
