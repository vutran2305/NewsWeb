/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Post from "../post/Post";
import "./posts.css";
export default function Posts({ topic, data }) {
  data.sort(function (a, b) {
    var dateA = new Date(a.Created_At),
      dateB = new Date(b.Created_At);
    return dateB - dateA;
  });
  const firstItem = data.slice(0, 1);
  const slicedArray = data.slice(1, 5);
  return (
    <>
      <div className="post-container">
        <h2>
          {topic === 1
            ? "Thời Sự"
            : topic === 2
            ? "Thể Thao"
            : topic === 3
            ? "Giáo Dục"
            : topic === 4
            ? "Giải Trí"
            : topic === 5
            ? "Pháp Luật"
            : topic === 7
            ? "Y Tế"
            : "Mới Nhất"}
        </h2>
        <div className="list-container">
          <div className="list-row">
            <div className="left-col">
              {firstItem.map((item, index) => (
                <Post key={index} item={item} topic={topic} />
              ))}
            </div>
            <div className="right-col">
              {slicedArray.map((item, index) => (
                <Post key={index} item={item} topic={topic} />
              ))}
            </div>
          </div>
          {data?.length > 5 && topic !== "" && (
            <Link to={`/topic/${topic}`}>
              <span className="read-more">Xem Thêm...</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
