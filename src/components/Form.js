import React from 'react'

const Form = ({ setLocation, getLocation }) => {

    const locationHandler = (e) => {
        setLocation(e.target.value);
    }

  return (
    <div>
        <form>
        <input placeholder='Enter Location' onChange={locationHandler} type="text" />
        <button type="submit" onClick={getLocation}>
          Get Weather
        </button>
        </form>
    </div>
  )
}

export default Form