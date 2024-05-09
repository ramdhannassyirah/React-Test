import {Card} from "antd";
const {Meta} = Card;

interface articleProps {
  title: string;
  id: number;
  author: string;
  urlToImage: string;
  url: string;
  content: string;
  description: string;
}

const CardArticle = (props: articleProps) => {
  return (
    <Card
      style={{width: 300}}
      cover={<img alt="example" src={props.urlToImage} />}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};

export default CardArticle;
