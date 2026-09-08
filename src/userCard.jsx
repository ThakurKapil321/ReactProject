import {users} from "./data.js"

const style = {
    cards: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "40px",
        
    },
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        overflow: "hidden",
        
    },
    h2:{
     color: "#bd3939",

    },
    p:{
        color:"orange",
    },
    p1:{
        color:"blue",
    },
}

function UserCard(){
    return(
        <div style={style.cards}>
            {users.map((data) => (
                <div style={style.card} key={data.id}>
                    <h2 style={style.h2}>{data.firstName} {data.lastName}</h2>
                    <img src={data.image} alt="User Image" style={{ width: "100%", height: "auto", borderRadius: "50%" }} />
                    <p style={style.p}>Email: {data.email}</p>
                    <p style={style.p1}>Age: {data.age}</p>
                </div>
            ))}
            </div>
       );
        }
export default UserCard;

