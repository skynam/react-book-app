
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../contexts/AppContext"
import { Button } from "react-bootstrap"
import BookRecord from "../components/BookRecord"

const BookList = ()=> {

    const navigate = useNavigate()

    // context
    const { fullBookList, filteredBookList } = useContext(AppContext)
    const stateFullBookList = fullBookList
    const [stateFilteredBookList, setFilteredBookList] = filteredBookList

    // state for this page
    const [searchBookTitle,setSearchBookTitle] = useState('')
    const [searchAuthor,setSearchAuthor] = useState('')
    const [searchPublicationYear,setSearchPublicationYear] = useState('')

    // methods
    const handleFilter = ()=> {
        const resultArray = stateFullBookList.filter((item)=>{            
            // filter book title
            const lowerCaseBookTitle = item.title.toLowerCase()
            const lowerCaseSearchBookTitle = searchBookTitle.toLowerCase()
            const matchBookTitle = lowerCaseBookTitle.includes(lowerCaseSearchBookTitle)

            // filter author
            const lowerCaseAuthor = item.author.toLowerCase()
            const lowerCaseSearchAuthor = searchAuthor.toLowerCase()
            const matchAuthor = lowerCaseAuthor.includes(lowerCaseSearchAuthor)

            // filter publication year
            const matchPublicationYear = searchPublicationYear !== '' ? item.publication_year === searchPublicationYear : true

            return matchBookTitle && matchAuthor && matchPublicationYear
        })
        setFilteredBookList(resultArray)
    }

    const handleReset = ()=> {
        setFilteredBookList(stateFullBookList)
        setSearchBookTitle('')
        setSearchAuthor('')
        setSearchPublicationYear('')
    }

    const handleGoBack = ()=> {
        navigate('/')
    }

    return (
        <div className="container">
            <div>
                <p>Search Criteria</p>
                <div className="row">
                    <div className="col">
                        <label>Book title</label><br/>
                        <input value={searchBookTitle} onChange={(value)=>{setSearchBookTitle(value.target.value)}} />
                    </div>
                    <div className="col">
                        <label>Author</label><br/>
                        <input value={searchAuthor} onChange={(value)=>{setSearchAuthor(value.target.value)}} />
                    </div>
                    <div className="col">
                        <label>Publication Year</label><br/>
                        <input value={searchPublicationYear} onChange={(value)=>{setSearchPublicationYear(Number(value.target.value))}} />
                    </div>
                </div>
                <Button onClick={()=>{handleFilter()}}>Search</Button>
                <Button onClick={()=>{handleReset()}}>Reset</Button>
            </div>
            <div>
                <Button onClick={()=>{handleGoBack()}}>Back to home page</Button>
            </div>
            {
                stateFilteredBookList &&
                stateFilteredBookList.map((bookObject, index) => (
                    <BookRecord key={index} bookObject={bookObject} />
                ))
            }
        </div>
    )
}

export default BookList