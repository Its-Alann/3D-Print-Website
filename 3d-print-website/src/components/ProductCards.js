import { Card } from 'react-bootstrap'

const ProductCards = props => {
  return (

      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://dummyimage.com/600x600/e8e8e8/000000" />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
          </Card.Body>
      </Card>
  )
}



export default ProductCards