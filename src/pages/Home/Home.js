import React from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import Product from '../../components/Product/Product'

const Home = () => {
    const products = [{
        _id: 1,
        name: ['Bob'],
        age: 3.5,
        gender: 'male',
        interests: ['music', 'skiing'],
      },
      {
        _id: 2,
        name: ['Bo'],
        age: 2,
        gender: 'male',
        interests: ['musi'],
      },
      {
        _id: 3,
        name: ['ob'],
        age: 4,
        gender: 'male',
        interests: ['music', 'skiing'],
      },
      {
        _id: 4,
        name: ['B'],
        age: .5,
        gender: 'male',
        interests: ['music', 'skiing'],
      }];
    return (
        <div>
            <Container className="text-center py">
                       <h1>Latest products</h1>
                       <Row>
                           {products.map((product) => (
                               <Col key={product._id} sm={12} md={6} lg={4}>
                                   <Product product={product}/>
                               </Col>
                           ))}

                       </Row>

            </Container>

        </div>
    );
}

export default Home;