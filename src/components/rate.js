import {ReactComponent as Star} from '../icons/star.svg';

const Rate = ({ value}) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <Star key={i}/>
    ))}
  </div>
);

export default Rate;