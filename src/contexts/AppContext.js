import { createContext, useState, useEffect } from "react"
import axios from "axios"

const AppContext = createContext()

const AppContextProvider = (props) => {
    const [fullBookList,setFullBookList] = useState([])
    const [filteredBookList,setFilteredBookList] = useState([])

    const callBookApi = async ()=> {
        if (fullBookList.length === 0) {
            const endpoint = 'https://www.freetestapi.com/api/v1/books'

            try {
                const response = await axios.get(endpoint)
                if (response?.status === 200) {
                    setFullBookList(response.data)
                    setFilteredBookList(response.data)
                }
            } catch (error) {
                console.log(error.message)
                alert('call book api failed!')
            }
        }
    }

    useEffect(()=>{
        callBookApi()
    }, [])

    return (
        <AppContext.Provider 
            value={{ 
                fullBookList: fullBookList, // without passing setState function, this value is read-only
                filteredBookList: [filteredBookList,setFilteredBookList] 
            }} >
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }