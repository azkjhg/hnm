import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const ProductDetail = () => {
  let {id} = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/azkjhg/hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json();
    console.log(id,response, data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  }
  , [])
  return (
    <div>
       <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img}></img>
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>{product?.price}</div>
          </Col>
        </Row>
        </Container> 
    </div>
  )
}

export default ProductDetail