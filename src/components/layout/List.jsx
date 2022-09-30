import { Link, Route, Routes  } from "react-router-dom"

export default function List(props) {
 
 
  return (
     <div className="container">
<Routes>

</Routes>

{props.movies.map((movie ,i) =>  {
return (
<div className="holder">
  
<Link to={`${movie.path}`}><img src={movie.logo} className='poster' alt='' /></Link>
<p className="title ghost">{movie.title}</p>
</div>)})}
  
</div>
  )
}
