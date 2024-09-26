import { createSlice } from "@reduxjs/toolkit";
import { db } from "../Firebase/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const productSlice = createSlice({
    name: "products",
    initialState: {products: []},
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        }
    }
})

export const fetchProducts = () => async(dispatch) => {
    try {
        const productList = [];
        const productCollection = collection(db, "products");
        const snapshot = await getDocs(productCollection);

        for (const doc of snapshot.docs) {
            const data = doc.data();

            productList.push({
                id: doc.id,
                title: data.title,
                description: data.description,
                price: data.price,
                imageUrl: data.imageUrl,
            });
        }
      
        dispatch(setProducts(productList));  
    } catch (error) {
        console.log(error)
    }
}

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;