import React, { createContext } from 'react'

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    // const [results, setResults] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('')

    const getResults = async () => {
      
      }

    const value = {
       
    };

    return <StateContext.Provider value={value}>
          {children}
           </StateContext.Provider>

};
