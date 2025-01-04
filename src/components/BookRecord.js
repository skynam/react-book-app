import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const BookRecord = ({bookObject})=> {

    const navigate = useNavigate()

    const goToDetail = (bookingObject)=> {
        navigate(`/book/${bookingObject.id}`, {
            state: {
              bookObject: bookObject,
            }
        })
    }    

    return (
        <>
            <div className="row">
                <div className="col">
                    <img src={bookObject.cover_image} alt={bookObject.title}/>
                </div>
                <div className="col">
                    <div className="row">
                        <h3>Title: {bookObject.title}</h3>
                        <p>Author: {bookObject.author}</p>
                        <p>Description: {bookObject.description}</p>
                    </div>
                    <Button onClick={()=>{goToDetail(bookObject)}}>Book Detail</Button>
                </div>
            </div>
        </>
    )
}

export default BookRecord