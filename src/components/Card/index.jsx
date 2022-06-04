import moment from "moment";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./card.css";
const CardTopic = ({ item }) => {
  const history = useHistory();
  const { News_Id, News_Title, News_description, News_Thumbnail, Created_At } =
    item;
  const { data } = News_Thumbnail;
  const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
  moment.locale("vi");
  moment().format("LL");

  return (
    <>
      <div
        className="card-container"
        onClick={() => history.push(`/post/${News_Id}`)}
      >
        <div className="card-image">
          <Link to={`/post/${News_Id}`}>
            {" "}
            <img
              src={`data:image/png;base64,${base64String}`}
              alt={News_Title}
              width="100%"
            />
          </Link>
        </div>
        <div className="card-meta">
          <div className="card-title">
            <Link to={`/post/${News_Id}`}>{News_Title}</Link>
          </div>
          <div className="card-date">
            <span>{`${moment(`${Created_At}`).format("LL")}`}</span>
          </div>
          <div className="card-description">
            <span>{News_description}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTopic;
