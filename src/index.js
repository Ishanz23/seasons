import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

const App = () => {
  const [state, setState] = useState({ lat: null, errorMsg: '' })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => setState({ lat: pos.coords.latitude }),
      err => setState({ errorMsg: err.message })
    )

    return () => {}
  }, [])

  const renderHelper = () => {
    if (state.lat) {
      return (
        <div>
          <SeasonDisplay lat={state.lat}></SeasonDisplay>
        </div>
      )
    } else if (state.errorMsg) {
      return (
        <h1
          style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#252525',
            color: 'white'
          }}
          className='error'>
          {state.errorMsg}
        </h1>
      )
    }
    return <Spinner message='Fetching your location...'></Spinner>
  }

  return <div style={{ width: '100%', height: '100vh' }}>{renderHelper()}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
