import { useContext } from "react";
import { userContext } from "../App";

function ContextApi() {
    const { userName, setUserName } = useContext(userContext);
    console.log("React", userName);
    return (
        <div>
            <h4>{userName}</h4>
            <button onClick={() => setUserName("Accessing Context API data")}>
                Access Data from Context
            </button>
        </div>
    );
}
export default ContextApi;
