import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const ProtectedRout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("client"));
        if (!user) {
            navigate("/cart");
        }
        
    })

    return children;

}
export default ProtectedRout
