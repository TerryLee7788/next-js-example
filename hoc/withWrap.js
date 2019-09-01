import React, { PureComponent } from 'react';
import compose from 'redux';
import { connect } from 'react-redux'
import SeoMeta from '../components/SeoMeta';
import NavBar from '../components/header/NavBar';

const withWrap = (Components, seoConfig, setting = {}) => {

    class Container extends PureComponent {

        static async getInitialProps({ query }) {

            return {
                name: query.name
            };

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
                    <NavBar></NavBar>
                    {
                        setting.haveSideBar
                            ? ('side bar!!')
                            : ('back nav~')
                    }
                    <Components
                        name={this.props.name}
                    />
                </main>
            );

        }

    }

    return Container;

};

export default withWrap;
