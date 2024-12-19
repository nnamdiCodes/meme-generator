import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

/* https://api.ingflip.com/get_memes */

function App() {
  const [memeImg, setMemeImg] = useState([])
  const [memeObj, setMemeObj] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/1tkjq9.jpg'
  })
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const fetchApi = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes")
      if (!response.ok) throw Error('Could not fetch Api')
      const data = await response.json()
      setMemeImg(data.data.memes)
      setFetchError(null)
    } catch (err) {
      setFetchError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  setTimeout(() => {
    fetchApi()
  }, 2000)
}, [])

  
  const handleChange = (event) => {
    const {name, value} = event.target
    const currentState = {...memeObj, [name]: value}
    setMemeObj(currentState)
  }

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * memeImg.length)
    const url = memeImg[randomNumber].url
    const currentState = {...memeObj, randomImg: url}
    setMemeObj(currentState)
  }
  
  return (
    <div className="App">
      <Header />
      <Main 
        topText={memeObj.topText}
        bottomText={memeObj.bottomText}
        handleChange={handleChange}
        handleClick={handleClick}
        randomImg={memeObj.randomImg}
        fetchError={fetchError}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
