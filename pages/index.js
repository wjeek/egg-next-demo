import React from 'react'
import { connect } from 'react-redux'
import 'html5-history-api'
import { requestInit } from '../redux/actions/olaf'
import Page from '../containers/page'

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    console.log('isServer', isServer)
    const state = store.getState()
    if (!state.receiveData.get('description')) {
      store.dispatch(requestInit(state.selectedDescription))
    }
  }

  componentDidMount() {}

  render() {
    return <Page />
  }
}

export default connect()(Index)
