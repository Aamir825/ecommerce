import { addItemToCart, removeItemFromCart } from '../Features/Cart';
import { useDispatch, useSelector } from 'react-redux';
import useProductDetail from '../Hooks/useProductDetails';
import { useState } from 'react';

function useDispatchProduct() {
    const dispatch = useDispatch();
    const { product, detailID } = useProductDetail();
    const [quantity, setQuantity] = useState(1);
    const [success, setSuccess] = useState(false);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const addToCart = () => {
        const cartItem = {
            id: detailID,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: quantity,
            imageUrl: product.imageUrl,
            total: product.price * quantity
        }
        dispatch(addItemToCart(cartItem));
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    }
    const removeFromCart = (itemID) => {
        dispatch(removeItemFromCart({ id: itemID }));
    }
    return { addToCart, removeFromCart, handleIncrement, handleDecrement, quantity, success }
}
export default useDispatchProduct