import React, { Component } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

class Completed extends Component {
  render() {
    return <h1>Animefest 2026 has begun!</h1>;
  }
}

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      digitStyle: {}, 
      labelStyle: {} 
    };
  }

  getDigitStyle = () => {
    const screenWidth = window.innerWidth;
    const scaleFactor = Math.min(1, screenWidth / 1000);
    const baseSize = 60;
    const baseFontSize = 4;

    return {
      width: baseSize * scaleFactor,
      height: (baseSize + 20) * scaleFactor,
      fontSize: `${baseFontSize * scaleFactor}rem`,
    };
  };

  getLabelStyle = () => {
    const screenWidth = window.innerWidth;
    const scaleFactor = Math.min(1, screenWidth / 1200);
    const baseFontSize = 2;

    return {
      fontSize: `${baseFontSize * scaleFactor}rem`,
      color: '#fff',
    };
  };

  updateStyles = () => {
    this.setState({ 
      digitStyle: this.getDigitStyle(), 
      labelStyle: this.getLabelStyle() 
    });
  };

  componentDidMount() {
    this.updateStyles();
    window.addEventListener('resize', this.updateStyles);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyles);
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <FlipClockCountdown
          to={new Date("2026-02-14T11:00:00").getTime()}
          digitBlockStyle={this.state.digitStyle}
          labelStyle={this.state.labelStyle}
          spacing={5 * (this.state.digitStyle.width / 60)}
        >
          <Completed />
        </FlipClockCountdown>
      </div>
    );
  }
}

export default Countdown;
