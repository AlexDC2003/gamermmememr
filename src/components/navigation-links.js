import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/cash-matches" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <span className="navigation-links-text">{props.text2}</span>
      <span className="navigation-links-text1">{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Cash Matches',
  text: 'Home',
  rootClassName: '',
  text3: 'FAQ',
  text2: 'Support',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks
