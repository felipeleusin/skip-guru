import React, { Component } from 'react'
import { Donut } from 'rebass/emotion'

const moveProgress = current => {
  const next = current + Math.floor(Math.random() * 5) + 1
  return next > 100 ? 0 : next
}

export default class ProgressDonut extends Component {
  state = { progress: 0 }

  componentDidMount() {
    this.interval = setInterval(this.handleUpdate, 60)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleUpdate = () => {
    this.setState(prevState => ({ progress: moveProgress(prevState.progress) }))
  }

  render() {
    return <Donut color="lightRed" value={this.state.progress / 100} />
  }
}
