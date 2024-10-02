import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDataFromApi(url) {
            try {
                const response = await fetch(url);
                setLoading(true);
                const result = await response.json()
                if (result) {
                    setData(response);
                    console.log('dataaa', response)
                }
                else {
                    setLoading(false);
                }

            }
            catch {
                console.log('eror')
            }


        }
        fetchDataFromApi();
    }, [url])
    return (data, loading)
}
export default useFetch;