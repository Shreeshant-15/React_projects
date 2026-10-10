import "./index.css";
import Navbar from "./components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri"; 



const App = () => {

  const [contacts,setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try{
          const contactsRef = collection(db,"contacts");
          const contactsSnapshot = await getDocs(contactsRef);
          const contactLists = contactsSnapshot.docs.map((doc) => {
            return {id: doc.id, ...doc.data()

            }; 
          
          });
        
         setContacts(contactLists);


      }catch(error){
        console.log(error);
      }
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
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className="bg-yellow flex justify-around items-center">
          <div className="flex">
            <HiOutlineUserCircle className="text-3xl text-orange"/>
          <div className="">
            <h2 className="">{contact.name} </h2>
            <p claasName="">{contact.email}</p>
          </div>
        </div>
        <div className="flex">
          <RiEditCircleLine/>
          <IoMdTrash/>
        </div>
        </div>
      ))}
    </div>
     </div>
  );
};

export default App;