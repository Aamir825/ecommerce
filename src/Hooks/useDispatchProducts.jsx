import { addItemToCart } from '../Features/Cart';
import { useDispatch, useSelector } from 'react-redux';
import useProductDetail from '../Hooks/useProductDetails';

function useDispatchProduct() {
    const dispatch = useDispatch();
    const { product, detailID } = useProductDetail();
    const counter = useSelector((state) => state.counter);
    const addToCart = () => {
        const cartItem = {
            id: detailID,
            titel: product.title,
            description: product.description,
            price: product.price,
            quantity: counter,
            imageUrl: product.imageUrl,
            total: product.price * counter
        }
        dispatch(addItemToCart(cartItem));
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingIndex = existingCart.findIndex(item => item.id === cartItem.id);
        let totalAmount = 0;
        if (existingIndex >= 0) {
            existingCart[existingIndex].quantity += cartItem.quantity;
            existingCart[existingIndex].total = existingCart[existingIndex].price * existingCart[existingIndex].quantity;
        } else {
            existingCart.push(cartItem);
        }
        totalAmount = existingCart.reduce((acc, item) => acc + item.total, 0);
        localStorage.setItem("totalAmount", totalAmount);
        localStorage.setItem("cart", JSON.stringify(existingCart));
    }
    return addToCart
}
export default useDispatchProduct