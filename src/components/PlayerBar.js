 import React, { Component } from 'react';
 
 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
         <section id="buttons">
           <button className="playerbarColor" id="previous" onClick={this.props.handlePrevClick}>
             <span className="ion-skip-backward"></span>
           </button>
           <button className="playerbarColor" onClick={this.props.play} id="play-pause">
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button className="playerbarColor" id="next" onClick={this.props.handleNextClick}>
             <span className="ion-skip-forward"></span>
           </button>
         </section>
         <section id="time-control">                                                                    
           <div className="current-time">{this.props.formattedTime(this.props.currentTime)}</div>
           <input 
             type="range" 
             className="seek-bar" 
             value={(this.props.currentTime / this.props.duration) || 0} 
             max="1" 
             min="0" 
             step="0.01"
             onChange={this.props.handleTimeChange} 
           />   
           <div className="total-time">{this.props.formattedTime(this.props.duration)}</div>
         </section>
         <section id="volume-control">
          <div className="current-volume">{this.props.currentVolume}</div>
           <input 
             type="range" 
             className="volume-bar" 
             value={(this.props.currentVolume)} 
             max="1" 
             min="0" 
             step="0.01"
             onChange={this.props.handleVolumeChange} 
           />    
         </section>
       </section>
     );
   }
 }
 
 export default PlayerBar;