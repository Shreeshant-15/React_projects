import "./index.css";
import Navbar from "./components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";


const App = () => {

  const [contacts,setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try{

      }catch(error){}
    };
    getContacts();
    },[]); 






  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
 <div className="flex gap-2">  
  <div className="flex relative items-center flex-grow">
    <IoSearchSharp className=" ml-1 text-3xl text-white absolute"/>
      <input 
      type="text"
      className="flex-grow h-10 rounded-md border border-white bg-transparent pl-9 text-white"/>
  </div>
        <FaCirclePlus className="text-4xl cursor-pointer text-white" />
  
    </div>
     </div>
  );
};

export default App;