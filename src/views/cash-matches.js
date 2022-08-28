import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './cash-matches.css'

const CashMatches = (props) => {
  return (
    <div className="cash-matches-container">
      <Helmet>
        <title>Cash-Matches - Gamermatch</title>
        <meta property="og:title" content="Cash-Matches - Gamermatch" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div id="hero" className="cash-matches-container1">
        <div className="cash-matches-container2">
          <div className="cash-matches-create-match-menu">
            <button className="cash-matches-button button">
              Create Cash Match
            </button>
            <div className="cash-matches-filter">
              <select className="cash-matches-select">
                <option value="Game Name" selected>
                  Game Name
                </option>
                <option value="Fortnite">Fortnite</option>
                <option value="Valorant">Valorant</option>
              </select>
              <select className="cash-matches-select1">
                <option value="Region" selected>
                  Region
                </option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">3v3</option>
              </select>
              <select className="cash-matches-select2">
                <option value="Size" selected>
                  Size
                </option>
                <option value="1v1">1v1</option>
                <option value="2v2">2v2</option>
                <option value="3v3">3v3</option>
              </select>
              <select className="cash-matches-select3">
                <option value="Platform" selected>
                  Platform
                </option>
                <option value="PC">PC</option>
                <option value="Console">Console</option>
                <option value="Mobile">Mobile</option>
              </select>
            </div>
          </div>
          <div className="cash-matches-container3">
            <div className="cash-matches-container4">
              <h1>Zone Wars</h1>
              <span className="cash-matches-text1">NAE</span>
              <span className="cash-matches-text2">$1.00 each</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashMatches
