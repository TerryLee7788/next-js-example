import React, { PureComponent } from 'react';
import NavBar from '../components/header/NavBar';

const withWrap = (Components) => {

    class Container extends PureComponent {

        static async getInitialProps({ query }) {

            return {
                name: query.name
            };

        }
    
        render () {
    
            return (
                <main className="container">
                    <NavBar></NavBar>
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
