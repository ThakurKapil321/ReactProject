import {car} from "../car.js"
import {useParams} from "react-router-dom"
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function ViewDetails(){
const {id}=useParams();
const select=car.find((car)=>car.id
===Number(id));
if(!select){
<h1>Data not found</h1>
}
return(
    <>
    <Header/>
    <div>
        <img src={select.image} alt={select.model} />
        <h1>{select.brand}</h1>
        <h2>{select.model}</h2>
        <p>Year: {select.year}</p>
    </div>
    <Footer/>
    </>
)
}

export default ViewDetails;