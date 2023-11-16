import './MovieModal.css'
export default function MovieModal({ movie, setClicked }) {
    return (
      <div className="modal-container">
        <div className="modal">
          <img src={movie.Poster} alt="poster" onClick={() => setClicked(null)}/>
          <h1 style={{fontSize:"1.2rem"}}>{movie.Title}</h1>
          <p><b>Date aired: </b> {movie.Year}</p>
          <p><b>About: </b>{movie.Plot}</p>
        </div>
      </div>
    );
}