import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock, showName } from '../store'
import Examples from '../components/example';

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
    this.timer = setInterval(() => this.props.startClock(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {

    const { name } = this.props.payload;
    
    return (
      <div>
        {
          name
            ? (
              <h1>
                hihihi!!!! {name}
              </h1>
            )
            : (null)
        }
        <Examples />
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { payload } = state
  return { payload }
}

const mapDispatchToProps = { startClock };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)