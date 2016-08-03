import DateBetween from './DateBetween'
import React, { Component, PropTypes } from 'react'

/**
 * Count down module
 * A simple count down component.
**/
export default class Countdown extends Component {

  constructor (props) {
    super(props)
    this.state = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    let startDate = new Date()
    let endDate = new Date(this.props.options.endDate)
    let remaining = DateBetween(startDate, endDate)
    let {days,hours,minutes,seconds} = remaining
    this.setState({days,hours,minutes,seconds})
  }

  render() {
    const css = {
      container: {
        width: '25%',
        height: 'auto',
        display: 'inline-block',
        textAlign: 'center',
      }
    }
    return (
      <div style={{fontFamily: 'Oswald'}} className="react-count-down">
        {/*<span className="date"> {this.state.remaining}</span>
        <span className="prefix"> {this.props.options.prefix}</span>*/}
        <div style={css.container}>
          <div>{this.state.days}</div>
          <div>Days</div>
        </div>
        <div style={css.container}>
          <div>{this.state.hours}</div>
          <div>Hours</div>
        </div>
        <div style={css.container}>
          <div>{this.state.minutes}</div>
          <div>Minutes</div>
        </div>
        <div style={css.container}>
          <div>{this.state.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    )
  };
}
