import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Landing = () => (
	<section className="landing">
		<h1 className="here-title">Turn the music up!</h1>

  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={4}>
        <br />
        <div className="point">
        	<ion-icon name="musical-notes"></ion-icon>
			<h2 className="point-title">Choose your music!</h2>
		</div>
      </Col>
      <Col sm={6} md={4}>
        <br />
        <div className="point">
        	<ion-icon name="infinite"></ion-icon>
        	<h2 className="point-title">Unlimited streaming, ad-free</h2>
      	</div>
      </Col>
      <Col sm={6} md={4}>
        <br />
        <div className="point">
        <ion-icon name="phone-portrait"></ion-icon>
        <h2 className="point-title">Mobile enabled</h2>
        </div>
      </Col>
    </Row>
  </Grid>


{/* 
	<section className="selling-points">
		<div className="point">
			<h2 className="point-title">Choose your music</h2>
			<p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
		</div>
      	<div className="point">
        	<h2 className="point-title">Unlimited, streaming, ad-free</h2>
        	<p className="point-description">No arbitrary limits. No distractions.</p>
      	</div>
      	<div className="point">
        	<h2 className="point-title">Mobile enabled</h2>
        	<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      	</div>
    </section>	
*/}

</section>

);

export default Landing;