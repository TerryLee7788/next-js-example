import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showName } from '../store';

class ShowName extends Component {

    handleNameClick = () => {

        const { showName } = this.props;
        showName('terry');

    }

    handleInputChange = (e) => {

        const { showName } = this.props;
        showName(e.target.value);

    }

    render () {

        const { name } = this.props.payload;
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
            </div>
        );

    }

}

function mapStateToProps (state) {
    const { payload } = state;
    return { payload };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ showName }, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowName);