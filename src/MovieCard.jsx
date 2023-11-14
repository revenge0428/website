import './MovieCard.css'

function MovieCard({props}) {
    return (
        
       <div className='movie-container' >
            <div className="moviecard">
                <img src={props.Poster}/>
                <p>{props.Type}</p>
                <p>{props.Year}</p>
                <h1>{props.Title}</h1>
            </div>
        </div> 
    );
}
export default MovieCard;