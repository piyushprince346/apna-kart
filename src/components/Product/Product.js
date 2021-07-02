import React from 'react';
import './Product.css';
import {useStateValue} from '../../contexts/StateProvider';
function Product(props) {
    const { id, title, image, price, rating } = props;

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
    };
    
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">
                    {title}
                </p>


            </div>
            <div>
                <img className="product__image" src={image} alt="Product " />
            </div>
            <div className="product__rating">
                {
                    Array(rating).fill(1)
                        .map((num, index) => {
                            return (
                                <span key={index}>
                                    ⭐
                                </span>
                            )
                        })
                }
            </div>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__addToBasket">
                <button className="product__addBasketButton" onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
