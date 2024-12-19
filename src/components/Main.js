import Form from "./Form"
import Figure from "./Figure"

const Main = (
  { topText, bottomText, handleChange, handleClick, randomImg, fetchError, isLoading}
) => {
  return (
    <main className="Main">
        <Form
          topText={topText}
          bottomText={bottomText}
          handleChange={handleChange}
          handleClick={handleClick}
        />
        <Figure 
          topText={topText}
          bottomText={bottomText}
          randomImg={randomImg}
          fetchError={fetchError}
          isLoading={isLoading}
        />
    </main>
  )
}

export default Main