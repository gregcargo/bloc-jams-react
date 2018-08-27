import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import { Grid, Row, Col } from 'react-bootstrap';

class Library extends Component {
	constructor(props) {
		super(props);
		this.state = { albums: albumData };
	}

	render() {
		return (
			<section className='Library'>
				{
				this.state.albums.map( (album, index) =>
						 <Grid key={index}>
						 <Link to={`/album/${album.slug}`}>
    						<Row className="album-grid">
      							<Col sm={6} md={6}>
        							<br/>
        							<div className="point">
        							<img className="album-thumbnail" src={album.albumCover} alt={album.title} />
									</div>
      							</Col>
      							<Col className="album-info" sm={6} md={6}>
        							<br />
        							<div>{album.title}</div>
									<div>{album.artist}</div>
									<div>{album.songs.length} songs</div>
      							</Col>
    						</Row>
    						</Link>
  						</Grid>

						/*
						<Link to={`/album/${album.slug}`} key={index}>
							<img src={album.albumCover} alt={album.title} />
							<div>{album.title}</div>
							<div>{album.artist}</div>
							<div>{album.songs.length} songs</div>
						</Link>
						*/
					)
				}
			</section>
		);
	}
}

export default Library;
