import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addTrack() {
    console.log("Max - newMax", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }
  findTrack() {
    console.log("find track", this.searchInput.value);
  }
  render() {
    console.log(this.props.tracks);
    return (
      <div>
        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
              <li key={index}>{track.name}</li>
            )}
        </ul>
      </div>
    );
  }
}
export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload})
    }
  })
)(App);
