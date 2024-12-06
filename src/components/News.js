// 

import React, { useState, useEffect } from 'react';
import Items from './Items'; // Assuming Items component is correctly imported
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `NewsUsagi ${props.category}`;
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
   props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e6f2a387aa7f4d6cb11c73a90242fe7a&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setLoading(false);
      setArticles(parsedData.articles);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
    }
    props.setProgress(100);
  };

  const PrevFunc = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const NextFunc = () => {
    setPage(page + 1);
  };

  return (
    <div className="container my-3">
      <h1 className='text-center'style={{marginTop:'80px'}}>NewsUsagi</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <Items
              title={element.title ? element.title.slice(0, 46) : "No Title"}
              description={element.description ? element.description : "No Description"}
              imageUrl={element.urlToImage}
              newsurl={element.url}
              author={element.author}
              time={element.publishedAt}
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={PrevFunc} disabled={page <= 1}>Previous</button>
        <button type="button" className="btn btn-dark" onClick={NextFunc}>Next</button>
      </div>
    </div>
  );
};

export default News;


// render(){
// return (
//     <div className="my-3">
//       {this.state.articles.map((article, index) => (
//         <Items 
//           key={index} 
//           title={article.title} 
//           description={article.description} 
//           imageUrl={article.urlToImage} 
//         />
//       ))}
//     </div>
//   );
// }
// }
