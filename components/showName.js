import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showName, controlLoading } from '../store';

class ShowName extends Component {

    handleNameClick = () => {

        const { showName } = this.props;
        showName('terry');

    }

    handleInputChange = (e) => {

        const { showName } = this.props;
        showName(e.target.value);

    }

    hideLoading () {

        setTimeout(() => {

          this.props.controlLoading(false);

        }, 3000);

      }

    render () {

        const { name } = this.props.clock.payload;
        return (
            <div style={{
                marginTop: 16
            }}>
                <input type="text" value={name} onChange={this.handleInputChange}/>
                <div
                    style={{
                        marginTop: 8
                    }}
                >
                    <button onClick={this.handleNameClick}>showName</button>
                </div>
                {
                    name
                        ? (<p>Your Name: {name}</p>)
                        : (null)
                }
                <hr/>
                <button onClick={() => {

                    this.props.controlLoading(!this.props.loading.haveLoading);
                    this.hideLoading();

                }}>
                    toggle loading
                </button>
            </div>
        );

    }

}

function mapStateToProps (state) {
    const { clock, loading } = state;
    return { clock, loading };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ showName, controlLoading }, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowName);