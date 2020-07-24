import React, { PureComponent } from 'react';
import compose from 'redux';
import { connect } from 'react-redux'
import SeoMeta from '../components/SeoMeta';
import NavBar from '../components/header/NavBar';

const withWrap = (Components, seoConfig, setting = {}) => {

    class Container extends PureComponent {

		static getInitialProps(ctx) {
			return Components.getInitialProps ? Components.getInitialProps(ctx) : {...ctx}
		}

        render () {

            return (
                <main className="container">
                    {
                        seoConfig
                            ? (
                                <SeoMeta
                                    config={seoConfig}
                                />
                            )
                            : (null)
                    }
                    <NavBar/>
                    {
                        setting.haveSideBar
                            ? ('side bar!!')
                            : ('back nav~')
                    }
                    <Components
                        {...this.props}
                    />
                </main>
            );

        }

    }

    return Container;

};

export default withWrap;
