import ReactStars from 'react-stars'
import { office } from '../../data';
const Ffice = () => {
const {title ,  description , rate , directors , logo } = office
    return (
        <div>
    <img src={logo} alt="" />
   <h2>{title}</h2>
   <ReactStars value={rate} />
   <p>{description}</p>
   <h3>made by {directors}</h3>
           </div>
    );
}

export default Ffice;
