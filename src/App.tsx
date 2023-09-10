import Cta from "./Components/Cta"
import Form from "./Components/Form"

function App() {
  return (
    <div className="py-16 bg-hero-mobile bg-pink lg:h-screen lg:flex-center">
      <div className="wrapper  flex flex-col md:grid md:grid-cols-2 gap-8">
        <Cta />
        <Form />
      </div>
    </div>
  )
}

export default App
