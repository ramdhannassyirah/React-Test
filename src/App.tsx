import React, {useEffect, useState} from "react";
import {getNews} from "./api/newsApi";
import CardArticle from "./components/CardArticle";
import {Flex, Spin} from "antd";

interface items {
  title: string;
  id: number;
  author: string;
  urlToImage: string;
  url: string;
  content: string;
  description: string;
}

const App: React.FC = () => {
  const [news, setNews] = useState<items[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getNews();
        setNews(articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Flex>
      <Flex wrap gap="small">
        {news.map((item, index) => (
          <CardArticle
            key={index}
            title={item.title}
            urlToImage={item.urlToImage}
            url={item.url}
            id={item.id}
            description={item.description}
            author={item.author}
            content={item.content}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default App;
