import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async() => {
        let searchQuery = query.get("q") || ""
        console.log(searchQuery)
        let url = `https://my-json-server.typicode.com/azkjhg/hnm/products?q=${searchQuery}` //모든 프로덕트를 가져와야 하니까 다 나오는 주소를 적음. api 호출 때와 동일
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }
    
    useEffect(()=>{
        getProducts()
    },[query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map(menu=>(
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll