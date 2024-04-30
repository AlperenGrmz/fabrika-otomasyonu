import axios from "axios"
import { useState, useEffect } from "react";
//import { BACKEND_API } from "../actions/config";

const getData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    };
const fakeApi = "https://dummyjson.com/";
    async function fetchData() {
        try {
            const {data} = await axios.get(`${fakeApi}/${url}`, config)
            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error.response.status);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

  return {data, loading, error, fetchData}
}

export default getData
