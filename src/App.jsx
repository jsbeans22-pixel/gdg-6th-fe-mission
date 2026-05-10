import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-500 flex flex-col">
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default App;