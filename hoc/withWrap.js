import React, { PureComponent } from 'react';
import compose from 'redux';
import { connect } from 'react-redux'
import SeoMeta from '../components/SeoMeta';
import NavBar from '../components/header/NavBar';
import styles from './withWrap.scss'

const withWrap = (Components, seoConfig, setting = {}) => {

    class Container extends PureComponent {

		static getInitialProps(ctx) {
			return Components.getInitialProps ? Components.getInitialProps(ctx) : {}
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
                    {/* {
                        setting.haveSideBar
                            ? ('side bar!!')
                            : ('back nav~')
                    } */}
                    <section className={styles.wrap}>
                        <Components
                            {...this.props}
                        />
                    </section>
                </main>
            );

        }

    }

    return Container;

};

export default withWrap;
