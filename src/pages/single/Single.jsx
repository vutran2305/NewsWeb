/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import Comments from "../../components/Comment/Comments";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailRequest } from "../../store/action/DetailAction";
import { fetchListRequest } from "../../store/action/NewsAction";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import "./single.css";
import CardTopTopic from "./TopTopic";
const Single = () => {
  moment.locale("vi");
  moment().format("LL");
  const { id } = useParams();
  const [speech, setSpeech] = useState();

  const url = "https://api.fpt.ai/hmi/tts/v5";
  let config = {
    headers: {
      "api-key": "pf3R8KUQA38QoRuhApBVlBQsZZi6EUqy",
      speed: "",
      voice: "banmai",
    },
  };

  const dispatch = useDispatch();
  const listNews = useSelector((state) => {
    return state?.listNewsReducer.list;
  });
  const detailContent = useSelector((state) => {
    return state?.detailNewsReducer?.detail;
  });
  const { News_Content, News_Title, Created_At, News_description } =
    detailContent;
  let NewArr = "";
  const fetchAudio = (NewArr) => {
    axios
      .post(`${url}`, NewArr, config)
      .then((res) => {
        setSpeech(res?.data?.async);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  };
  const newArray = [];
  const map = new Map();
  listNews.forEach((item) => {
    map.set(item?.Topic_Id, item);
  });
  for (let [a, b] of map) {
    newArray.push(b);
  }

  useEffect(() => {
    dispatch(fetchListRequest());
    dispatch(fetchDetailRequest(id));
    if (News_Content) {
      let collection = document.getElementsByClassName("Normal");
      Array.from(collection).forEach(function (element) {
        NewArr += element.innerHTML;
      });
    }

    fetchAudio(NewArr);
  }, [dispatch, id, News_Content, NewArr, speech, id]);
  return (
    <>
      <div className="single">
        <div className="single-content" style={{ maxWidth: "970px" }}>
          <h2>{News_Title}</h2>
          <audio controls>
            {speech && <source src={speech} type="audio/mpeg" />}
          </audio>
          <p className="date" style={{ marginTop: "25px" }}>{`${moment(
            `${Created_At}`
          ).format("LL")}`}</p>
          <p className="description">{News_description}</p>
          <div dangerouslySetInnerHTML={{ __html: News_Content }} />
          <Comments id={id} />
        </div>
        <div
          className="top-post"
          style={{ maxWidth: "400px", marginLeft: "30px" }}
        >
          <h2>bài viết mới nhất các chuyên mục</h2>
          {newArray.map((item, index) => (
            <CardTopTopic key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Single;
