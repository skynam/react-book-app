import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "react-bootstrap"

const BookingDetail = ()=> {

    const location = useLocation()
    const navigate = useNavigate()

    const bookObject = location.state.bookObject

    return (
        <>
            <div>
                <img src={bookObject.cover_image} alt={bookObject.title}/>
            </div>
            <div>
                <p>Title: {bookObject.title}</p>
                <p>Author: {bookObject.author}</p>
                <p>Publication Year: {bookObject.publication_year}</p>
                <p>Genre: {bookObject.genre.join(', ')}</p>
                <p>Description:</p>
                <p>{bookObject.description}</p>
            </div>
            <Button onClick={()=>{navigate('/book')}}>Go Back</Button>
        </>
    )
}

export default BookingDetail