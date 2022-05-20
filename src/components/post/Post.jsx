import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./post.css";

export default function Post({ item }) {
  var localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  const {
    News_Id,
    News_Title,
    News_description,
    Topic_Name,
    Topic_Id,
    News_Thumbnail,
    Created_At,
  } = item;
  const { data, type } = News_Thumbnail;
  const base64String = btoa(String.fromCharCode(...new Uint8Array(data)));
  return (
    <div className="post">
      <div className="img-hover-zoom">
        <Link to={`/post/${News_Id}`}>
          {" "}
          <img
            src={`data:image/png;base64,${base64String}`}
            alt={News_Title}
            width="100%"
          />
        </Link>
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/topic/${Topic_Id}`}>
              {Topic_Name}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${News_Id}`} className="link">
            {News_Title}
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">{News_description}</p>
    </div>
  );
}
