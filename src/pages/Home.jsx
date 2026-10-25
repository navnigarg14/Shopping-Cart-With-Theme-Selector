import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Spinner from "../components/Spinner"
import Product from '../components/Product';


const Home = ({themeStyles}) => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const theme = useSelector((state) => state.theme.theme);
  const styles = themeStyles[theme];

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

    }
    catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])
  

  return (
    <div className={`${styles.background} pb-10`}>
      {
        loading ? 
        <Spinner/> : 
        posts.length > 0 ?
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
            posts.map((post) => (
              <Product key={post.id} post={post} themeStyles={themeStyles}/>
            ))
          }
        </div>) :
        <div className='flex justify-center items-center'>
          <p>No Data Found!</p>
        </div>
      }
    </div>
  )
}

export default Home;