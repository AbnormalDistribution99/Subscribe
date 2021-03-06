import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function ProductCard({product:{id, name,isVisible,overallRating,sellerID, description}}){
   if(!overallRating){
    overallRating = 'No ratings yet' 
    
   }
    
   return(<Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
       
      {overallRating === "No ratings yet" ? (
        `${overallRating}.`
      ) : (
        <>
          {overallRating} <Icon name="star" color = 'orange'/>
        </>
      )}
       </a>
    </Card.Content>
  </Card>)
}

export default ProductCard