import React,{useState,useEffect,useContext} from 'react'


const AuthContext = React.createContext();

const authcontextdata =()=>{
    return useContext(AuthContext);
}



const AuthProvider =(props)=>{
    const[currentuser,setcurrentuser] = useState({});
    const[isloggedin,setisloggedin] = useState(false);

    return(
    <AuthContext.Provider
     value={{
        currentuser,
        setcurrentuser,
        isloggedin,
        setisloggedin,
         
     }}

     >
      {props.children}
      {console.log(currentuser)}
    </AuthContext.Provider>
    );

};

export {AuthProvider,AuthContext,authcontextdata};