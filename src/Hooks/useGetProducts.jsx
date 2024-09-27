import { useEffect, useState } from "react"
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function useGetProduct(){

    const [product, setProduct] = useState([]);

    const fetchProducts = async() =>{
        const productCollection = collection(db, "products");
        const snapshot = await getDocs(productCollection);
        // const data = snapshot.docs
        const productList = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
        setProduct(productList)
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    return product
}

export default useGetProduct