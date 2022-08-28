import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Gamermatch</title>
        <meta property="og:title" content="Gamermatch" />
      </Helmet>
      <Header></Header>
      <div className="home-main">
        <div className="home-container01">
          <div className="home-container02">
            <h1 className="home-text">Gamermatch.GG</h1>
            <span className="home-text01">Play Fortnite Cash Matches Now!</span>
            <div className="home-container03">
              <div className="home-btn-group">
                <button className="home-button button">Start Playing</button>
              </div>
              <img
                alt="image"
                src="/playground_assets/discord-color-logo-e5e6dfef80-seeklogo.com1-200h.png"
                className="home-image"
              />
            </div>
          </div>
          <div className="home-container04">
            <img
              alt="image"
              src="/playground_assets/fortnite-ruby-skin-featured-800w.png"
              className="home-image1"
            />
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="home-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/purple-circle.svg"
          className="home-purple-circle1"
        />
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <div className="home-blur-background"></div>
      </div>
      <div className="home-clients">
        <div className="home-container05">
          <div className="home-stat">
            <h1 className="home-text02">
              <span>50</span>
              <span>+</span>
            </h1>
            <span className="home-text05">Played Matches</span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text06">369</h1>
            <span className="home-text07">
              <span className="home-text08">Money Withdrawn</span>
              <br></br>
            </span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text10">24/7</h1>
            <span className="home-text11">Support</span>
          </div>
        </div>
      </div>
      <div className="LoginPopUp">
        <div className="home-container07">
          <h1 className="home-text12">Log In</h1>
          <div className="home-container08">
            <span className="home-text13">Username</span>
            <input
              type="text"
              placeholder="placeholder"
              className="home-textinput input"
            />
          </div>
          <div className="home-container09">
            <span className="home-text14">Password</span>
            <input
              type="text"
              placeholder="placeholder"
              className="home-textinput1 input"
            />
          </div>
          <button className="home-button1 button">Button</button>
        </div>
      </div>
    </div>
  )
}

export default Home
