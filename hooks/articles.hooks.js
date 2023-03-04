import { useState, useEffect } from "react";
import { apiUrl } from "../utils/config";
import { useRouter } from "next/router"

const useArticles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(apiUrl + "" + "/posts")
      const data = await res.json();
      setData(data);
      setLoading(false)
    }

    fetchData().catch((e) => {
      setError(e)
      setLoading(false)
    })

  }, []);

  return {
    data,
    loading,
    error,
  };
};

const useArticle = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(apiUrl + "" + "/posts/"+id)
      const data = await res.json();
      setData(data);
      setLoading(false)
    }

    fetchData().catch((e) => {
      setError(e)
      setLoading(false)
    })

  }, [id]);

  return {
    data,
    loading,
    error,
  };
};

const useGetUserArticles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await fetch(apiUrl + "" + "/posts?userId="+id)
      const data = await res.json();
      setData(data);
      setLoading(false)
    }

    fetchData().catch((e) => {
      setError(e)
      setLoading(false)
    })

  }, [id]);

  return {
    data,
    loading,
    error,
  };
};

const useDelteArticle = () => {
  const [isSuccess, setIsSuccess] = useState(undefined)


  const deleteArticle = async (id) => {
    const res = await fetch(apiUrl + "" + "/posts/"+id, {
      method: "DELETE"
    })
    setIsSuccess( res.status === 200)
  }

  return {
    deleteArticle,
    isSuccess,
  };
};

const useEditArticle = () => {
  const [isSuccess, setIsSuccess] = useState(undefined)
  const router = useRouter()
  const { id } = router.query

  const editArticle = async (title, body) => {
    const res = await fetch(apiUrl + "" + "/posts/"+id, {
      method: "PATCH",
      body: JSON.stringify({"title": title, "body": body})
    })
    setIsSuccess( res.status === 200)
  }

  return {
    editArticle,
    isSuccess,
  };
};



export { useArticles, useDelteArticle, useArticle, useEditArticle, useGetUserArticles }