import { Link } from "react-router-dom"


const Homepage = ()=> {
    
    return (
        <>
            <div className="container">
                <Link to={`/book`}>
                    <p>Go to Book List</p>
                </Link>
            </div>      
        </>
    )
}

export default Homepage