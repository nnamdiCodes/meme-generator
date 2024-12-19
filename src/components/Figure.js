import React from 'react'

const Figure = ({ topText, bottomText, randomImg, fetchError, isLoading }) => {
  return (
    <>
      {isLoading && <p className='isLoading'>...loading</p>}
      { !fetchError && !isLoading &&
       <figure className='memeImage'>
        <img src={randomImg} alt="memeImage" />
        <div className='topText'>{ topText }</div>
        <div className='bottomText'>{ bottomText }</div>
      </figure> }

      {fetchError && !isLoading && <p className='errMsg'>{`Error: ${fetchError}`}</p>}
    </>
  )
}

export default Figure

/* { !fetchError ?
    (<figure className='memeImage'>
      <img src={randomImg} alt="memeImage" />
      <div className='topText'>{ topText }</div>
      <div className='bottomText'>{ bottomText }</div>
    </figure>) :
    (<p>`Error: ${fetchError}`</p>)
    } */