import { useEffect, useState } from "react"
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

function useGetProduct(category = ""){

    const [product, setProduct] = useState([]);

    const fetchProducts = async() =>{
        const productCollection = collection(db, "products");
        let productQuery = productCollection;
        if(category){
            productQuery = query(productCollection, where("category", "==" ,category))
        }
        const snapshot = await getDocs(productQuery);
        // const data = snapshot.docs
        const productList = snapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
        setProduct(productList)
    }
    useEffect(()=>{
        fetchProducts();
    },[category])

    return product
}

export default useGetProduct