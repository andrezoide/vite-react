import { useEffect, useState, useRef } from "react";

// esse arquivo ta fazendo tudo oque foi comentado la no App.jsx, pra separar a logica e la só renderizar, e também pra gente conseguir utilizar essa estrutura em qualquer API.
export function useAxios(configRequest) {
  const { axiosInstance, method, url, othersConfig = {} } = configRequest
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const effectRun = useRef(false)


  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...othersConfig,
          signal: controller.signal
        })
        setData(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    if (effectRun.current) fetchData()
    return () => {
      controller.abort()
      effectRun.current = true
    };
  }, [])
  
  return [data, isLoading, error];
}