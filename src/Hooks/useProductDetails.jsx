import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { fireDb } from "../Firebase/FirebaseConfig";

function useProductDetail() {

    const { detailID } = useParams();
    const [product, setProduct] = useState(null);
    
    const getProductDetails = async () => {
        try {
            const productData = await getDoc(doc(fireDb, "products", detailID))
            setProduct(productData.data())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductDetails();
    }, [])

    return {product, detailID};
}
export default useProductDetail