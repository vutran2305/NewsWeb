import "./card.css";
import moment from "moment";
import { Link } from "react-router-dom";
const CardTopic = ({ item }) => {
  const {
    News_Id,
    News_Tiltle,
    News_description,
    News_Thumbnail,
    Created_At,
  } = item;
  const { data, type } = News_Thumbnail;
  const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
  moment.locale("vi");
  moment().format("LL");
  return (
    <>
      <div className="card-container">
        <div className="card-image">
        <Link to={`/post/${News_Id}`}>
          {" "}
          <img
            src={`data:image/png;base64,${base64String}`}
            alt={News_Tiltle}
            width="100%"
          />
        </Link>
        </div>
        <div className="card-meta">
          <div className="card-title">{News_Tiltle}</div>
          <span className="card-date">{`${moment(`${Created_At}`).format("LL")}`}</span>
          <div className="card-description">{News_description}</div>
        </div>
      </div>
    </>
  );
};
export default CardTopic;
