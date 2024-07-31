function Property({name,rating,price}){
  return(
    <div className="property-item">
    <h2>{name}</h2>
    <h3>${price}/night</h3>
    <h4>{rating}⭐</h4>
    </div>
  )
}

export default Property;