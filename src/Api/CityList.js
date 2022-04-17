import React,{createContext ,useEffect, useState} from "react";


export const Context = createContext()
const CityList=(props)=>{

        // -----------------useState-------------------
        const[data,setData]= useState([])
        const[load,setLoad]= useState(false)
        // ----------------------API FETCH-------------------------
        async function getData(props){
                var requestOptions = {
                        method: 'GET',
                        redirect: 'follow'
                      };
                      
                      fetch("https://www.addressguru.in/api/cities", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                                setData(result)
                                setLoad(true)
                        })
                        .catch(error => console.log('error', error));
 
        }
        // ##################API FETCH####################-

        // -----------------useeffect-------------------------
        useEffect(()=>{
                getData()
        },[])
         // ##################useeffect####################
        return(
                <div>
 <Context.Provider
                value={{
                    value1: [data, setData],
                    value2: [load, setLoad],
                }}
            >
                {props.children}
            </Context.Provider>
                </div>
        )
}


export default CityList