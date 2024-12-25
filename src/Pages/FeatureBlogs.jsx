import React from 'react';

const FeatureBlogs = () => {
    const {user} = useContext(AuthContext);
    const [feature, setFeature] = useState([]);
  
    useEffect(() => {
      fetchWishList();
    }, []);
  
    const fetchWishList = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_CALL}all-blogs`
        );
        setWish(data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      }
    };
    return (
        <div>
            
        </div>
    );
};

export default FeatureBlogs;