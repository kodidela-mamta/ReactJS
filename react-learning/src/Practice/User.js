import { useParams } from "react-router-dom";

const User = () => {
    const userId = useParams();
    return <span>User Id{userId}</span>;
};
export default User;
