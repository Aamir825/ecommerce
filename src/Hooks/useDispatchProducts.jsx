import { addItemToCart, removeItemFromCart } from '../Features/Cart';
import { useDispatch, useSelector } from 'react-redux';
import useProductDetail from '../Hooks/useProductDetails';

function useDispatchProduct() {
    const dispatch = useDispatch();
    const { product, detailID } = useProductDetail();
    const counter = useSelector((state) => state.counter);
    const addToCart = () => {
        const cartItem = {
            id: detailID,
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: counter,
            imageUrl: product.imageUrl,
            total: product.price * counter
        }
        dispatch(addItemToCart(cartItem));
    }
    const removeFromCart = (itemID) =>{
        dispatch(removeItemFromCart({id: itemID}));
    }
    return {addToCart, removeFromCart}
}
export default useDispatchProduct