import ProductCards from "./ProductCards"
import { Container, Row, Col } from 'react-bootstrap'

const Products = props => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs="auto" md={6} lg={4}> <ProductCards/> </Col>
                    <Col xs="auto" md={6} lg={4}> <ProductCards /> </Col>
                    <Col xs="auto" md={6} lg={4}> <ProductCards /> </Col>                    
                </Row>
            </Container>
        </div>
    )
}

export default Products