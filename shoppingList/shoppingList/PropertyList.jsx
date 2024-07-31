
import Property from "./Property";

function PropertyList({properties}){
  return(
    <div  className="property-list">
  {properties.map((property=>{
    return(
    <Property key={property.id }{...property}/>
  )
  }))}
    </div>
  )
}

export default PropertyList;