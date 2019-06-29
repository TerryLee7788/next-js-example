import { connect } from 'react-redux'
import Clock from './clock'
import Counter from './counter'
import ShowName from './showName';

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <ShowName />
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)