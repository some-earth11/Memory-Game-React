import './SingleCard.css'

const SingleCard = ({card}) => {
    return (  
        <div className="card" key={card.id}>
            <div>
              <img src={card.src} alt="card front" className="front" />
              <img src="/img/cover.png" alt="card back" className="back" />
            </div>
        </div>
    );
}
 
export default SingleCard;