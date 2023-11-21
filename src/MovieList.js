import MovieCard from "./MovieCard"
import './style.css'
const MovieList = ({movies})=>{
    return(
        <div className="cardlist">

        {movies.map((film)=>
            <MovieCard {...film} />)}
            </div>
    )
}
export default MovieList;