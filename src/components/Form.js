import React from 'react'

const Form = ({
    topText, bottomText, handleChange, handleClick
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className='textForm'>
      <label htmlFor="topText">Top text</label>
      <input
        id='topText'
        type="text"
        placeholder='top text'
        name='topText'
        value={topText}
        onChange={handleChange}
      />
      <label htmlFor="bottomText">Top text</label>
      <input
        id='bottomText'
        type="text"
        placeholder='bottom text'
        name='bottomText'
        value={bottomText}
        onChange={handleChange}
      />
      <button className='memebutton' onClick={handleClick}>Get a new meme image</button>
    </form>
  )
}

export default Form