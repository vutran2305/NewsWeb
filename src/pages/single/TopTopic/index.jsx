import moment from "moment";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./TopTopic.css";
const CardTopTopic = ({ item }) => {
  const history = useHistory();
  const { News_Id, News_Title, News_Thumbnail, Created_At, Topic_Id } = item;
  const { data } = News_Thumbnail;
  const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
  moment.locale("vi");
  moment().format("LL");
  useEffect(() => {}, []);

  return (
    <>
      <div
        className="card-topic-container"
        onClick={() => history.push(`/post/${News_Id}`)}
      >
        <div className="card-topic-image">
          <Link to={`/post/${News_Id}`}>
            {" "}
            <img
              src={`data:image/png;base64,${base64String}`}
              alt={News_Title}
              width="100%"
            />
          </Link>
        </div>
        <div className="card-topic-meta">
          <div className="card-topic">
            <Link to={`/topic/${Topic_Id}`}>
              <span>
                {" "}
                {Topic_Id === 1
                  ? "Thời Sự"
                  : Topic_Id === 2
                  ? "Thể Thao"
                  : Topic_Id === 3
                  ? "Giáo Dục"
                  : Topic_Id === 4
                  ? "Giải Trí"
                  : Topic_Id === 5
                  ? "Pháp Luật"
                  : "Y Tế"}
              </span>
            </Link>
          </div>
          <div className="card-topic-title">
            <Link to={`/post/${News_Id}`}>{News_Title}</Link>
          </div>
          <div className="card-topic-date">
            <span>{`${moment(`${Created_At}`).format("LL")}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTopTopic;
