import {useState} from 'react'
const Tour = ({ id, image, info, price, name, handleDelete }) => {

    const [readmore, setReadmore] = useState(true)
   
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
                  <p>{readmore ? info : `${info.substring(0, 100)}...`}
                  <button onClick={() => setReadmore(!readmore)}>
                  {readmore ? 'show less' : '  read more'}
                </button>
                  </p>
          <button className="delete-btn" onClick={(e)=>handleDelete(e,id)}>Not interested</button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
