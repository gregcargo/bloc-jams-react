import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
	constructor(props) {
		super(props);
	
		const album = albumData.find( album => {
			return album.slug === this.props.match.params.slug
		});

		this.state = {
			album: album,
			currentSong: album.songs[0],
			currentTime: 0,
			duration: album.songs[0].duration,
			currentVolume: 0.6,
			isPlaying: false,
			isMouseInside: null
		};

		this.audioElement = document.createElement('audio');
		this.audioElement.src = album.songs[0].audioSrc;

		};

	componentDidMount() {
     	this.eventListeners = {
       	timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
       	},
       	durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
       	},
       	volumechange: e => {
        this.setState({ currentVolume: this.audioElement.volume });
       	}
     	};
     	this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     	this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
		this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
   		}

	componentWillUnmount() {
    	this.audioElement.src = null;
     	this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     	this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
		this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
   		}

	play() {
		if (this.state.isPlaying){
			this.audioElement.pause();
			this.setState({ isPlaying: false });
		}
		else {
			this.audioElement.play();
			this.setState({ isPlaying: true });
		}
		}

	pause() {
		this.audioElement.pause();
		this.setState({ isPlaying: false });
		}

	setSong(song) {
		this.audioElement.src = song.audioSrc;
		this.setState({ currentSong: song })
		}

	handleSongClick(song) {
		const isSameSong = this.state.currentSong === song;
		if (this.state.isPlaying && isSameSong) {
			this.pause();
		} else {
			if (!isSameSong) { this.setSong(song); }
			this.play();
		}
		}


	handlePrevClick() {
    	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      	const newIndex = Math.max(0, currentIndex - 1);
      	const newSong = this.state.album.songs[newIndex];
      	this.setSong(newSong);
      	this.audioElement.play();
    	}

	handleNextClick() {
    	const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      	const newIndex = Math.max(0, currentIndex + 1);
      	const newSong = this.state.album.songs[newIndex];
      	console.log (newSong)
      	this.setSong(newSong);
      	this.audioElement.play();
    	}

    formatTime(oldTime) {
    	const floorTime = Math.floor(oldTime);
      	const minutes = Math.floor(floorTime / 60);
      	const seconds = (floorTime % 60);
      	
      	return minutes+":"+(seconds < 10 ? "0"+seconds : seconds); 
      	}

    handleTimeChange(e) {
    	//const formattedTime = this.formatTime(e.target.value) 
    	
     	const newTime = this.audioElement.duration * e.target.value;
     	this.audioElement.currentTime = newTime;
     	this.setState({ currentTime: newTime });
   		}

   	handleVolumeChange(e) {
   		console.log (e.target.value);
   		const newVolume = e.target.value;
   		this.audioElement.volume = newVolume;
   		this.setState({ currentVolume: newVolume });
   		}
   
	handleHoverOn(song) {
		console.log("hover test");
		}

	gitIcons (song, index) {
		if (this.state.isPlaying && this.state.currentSong === song) {
       		return <span className="ion-pause"></span>
     		}
     	else if (this.state.isMouseInside === index + 1) {
       		return <span className='ion-play'></span>
     		}
     	else {
       		return <span>{index + 1}</span>
     		}
		}

	mouseEnter = (songNumber) => {
  		this.setState({ isMouseInside: songNumber });
		}

	mouseLeave = () => {
  		this.setState({ isMouseInside: null });
		}

	render() {
		return (
			<section className="album">
				<section id="album-info">
          			<img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
           			<div className="album-details">
             			<h1 id="album-title">{this.state.album.title}</h1>
             			<h2 className="artist">{this.state.album.artist}</h2>
             		<div id="release-info">{this.state.album.releaseInfo}</div>
           			</div>
         		</section>
         		<table id="song-list">
           			<colgroup>
             			<col id="song-number-column" />
             			<col id="song-title-column" />
             			<col id="song-duration-column" />
           			</colgroup>  
           			
           			<tbody>
           			{
					this.state.album.songs.map( (song, index) =>
						<tr onMouseEnter={() => this.mouseEnter(index + 1)} onMouseLeave={this.mouseLeave} className="song" key={index + 1} onClick={() => this.handleSongClick(song)} >
							<td>{this.gitIcons(song, index)}</td>
							<td>{song.title}</td>
							<td>{this.formatTime(song.duration)}</td>
						</tr>
						
					)
					}
           			</tbody>

         		</table>
         		<PlayerBar
           			isPlaying={this.state.isPlaying}
           			currentSong={this.state.currentSong}
           			currentTime={this.audioElement.currentTime}
           			duration={this.audioElement.duration}
           			currentVolume={this.audioElement.volume}
           			handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           			handlePrevClick={() => this.handlePrevClick()}
           			handleNextClick={() => this.handleNextClick()}
           			handleTimeChange={(e) => this.handleTimeChange(e)}
           			handleVolumeChange={(e) => this.handleVolumeChange(e)}
           			formattedTime={(e) => this.formatTime(e)}
           			play={() => this.play()}
         		/>
			</section>
		);
	}
}

export default Album;

