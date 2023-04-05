import React from 'react'

function Productlist(props) {
    const {products} = props;
  return (
    <div>
        {products.map((product)=>(
            <div>
                {product.no}.
                <ul>
                <ul>Name : {product.name}</ul>
                <ul>Price : {product.price}</ul>
                <ul>ImageURL : {product.img}</ul>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Productlist