import React from 'react'
import { connect } from 'react-redux'

class Detail extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx
    console.log(store)
  }

  componentDidMount() {}

  render() {
    return <div>我就是详情页啊</div>
  }
}

export default connect()(Detail)
