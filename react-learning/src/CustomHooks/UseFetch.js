import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            fetch(url).then(response => response.json())
                .then(data => setData(data))
            console.log('data', data)
        }
        catch (error) {
            console.log('Error fetching data', error);
        }
        finally {
            setLoading(false)
        }
    }
        , [url])
    return { data, loading }
}
export default useFetch;