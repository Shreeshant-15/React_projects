import "./index.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
   <div className="flex">
      <input 
      type="text"
      className="flex-grow h-10 rounded-md border border-white bg-transparent"/>
    </div>
     </div>
  );
};

export default App;