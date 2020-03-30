import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer: {
    text: "Let's head to the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Brr! Its chilling!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month < 2 || month > 9) {
    return lat > 0 ? 'winter' : 'summer'
  } else {
    return lat > 0 ? 'summer' : 'winter'
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon top`}></i>
      <div className='text'>
        <h1>{text}</h1>
      </div>
      <i className={`massive ${iconName} icon bottom`}></i>
    </div>
  )
}

SeasonDisplay.defaultProps = {
  lat: null
}

export default SeasonDisplay
