import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Cart2 from '../Cart2/Cart2';

const CartGroup2 = () => {
      const products = [
        { id: 1, name: "Laptop Pro", price: 125000 },
        { id: 2, name: "Laptop Crow", price: 125000 },
        { id: 3, name: "Laptop Grow", price: 125000 },
      ];
    return (
        <div>
            <CardGroup>
                {
                    products.map((product)=><Cart2
                    product={product}
                    key={product.id}
                    ></Cart2>)
                }
            </CardGroup>
        </div>
    );
};

export default CartGroup2;