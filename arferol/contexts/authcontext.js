import React,{useState,useEffect,useContext} from 'react'


const AuthContext = React.createContext();

const authcontextdata =()=>{
    return useContext(AuthContext);
}



const AuthProvider =(props)=>{
    const[currentuser,setcurrentuser] = useState({});
    const[isloggedin,setisloggedin] = useState(false);
    const[clickedpost,setclickedpost] = useState("");
    return(
    <AuthContext.Provider
     value={{
        currentuser,
        setcurrentuser,
        isloggedin,
        setisloggedin,
        clickedpost,
        setclickedpost   
         
     }}

     >

      {props.children}
      {console.log(props.children)}
    </AuthContext.Provider>
    );

};

export {AuthProvider,AuthContext,authcontextdata};