import { useState , useEffect } from 'react'
import axiosInstance from '../../networks/apis';

const useAxios = (axiosConfig) => {

    const [response , setResponse] = useState(undefined)
    const [error , setError] = useState('')
    const [loading , setLoading] = useState(true)

    const fetching = async (config) => {
        try {
            const result = await axiosInstance(config);
            setResponse(result.data);
        } 
        catch( error ) {
            setError(error);
        } 
        
        return  setLoading(false)
    }

    useEffect(()=>{
        fetching(axiosConfig)
    },[])

    return {
        response , error , loading
    }

}

export default useAxios