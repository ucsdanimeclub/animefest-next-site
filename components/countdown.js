import React, { Component } from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// class Countdown extends Component {
//   render() {
//     return <FlipClockCountdown to={new Date("2025-02-03T00:00:00").getTime()} />;
//   }
// }


class Completed extends Component {
  render() {
    return <h1>Animefest 2025 has begun!</h1>;
  }
}

class Countdown extends Component {
  render() {
    return (
      <FlipClockCountdown to={new Date("2025-02-15T11:00:00").getTime()}>
        <Completed />
      </FlipClockCountdown>
    )
  }
}

export default Countdown