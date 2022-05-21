/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import Comments from "../../components/Comment/Comments";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailRequest } from "../../store/action/DetailAction";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
import "./single.css";
const Single = () => {
  moment.locale("vi");
  moment().format("LL");
  const { id } = useParams();
  const [speech, setSpeech] = useState();
  /*
  tk account 1: tvv2k, pass: tvvDUE44k14@ {done pay}
   api-key: pf3R8KUQA38QoRuhApBVlBQsZZi6EUqy
   tk account 2: tvvdue4414, pass: tương tự
   "api-key": "8ZZ39H0kTOWmF56YMGkTMIHpW7GsbG7j",
   tk account 3: tvvdue, pass: tvvDUE44k14@
   apikey: "kK5WLZn5nddU3sgz0jjEH2KD2HbCmudY"
   */
  const url = "https://api.fpt.ai/hmi/tts/v5";
  let config = {
    headers: {
      "api-key": "pf3R8KUQA38QoRuhApBVlBQsZZi6EUqy",
      speed: "",
      voice: "banmai",
    },
  };

  const dispatch = useDispatch();
  const detailContent = useSelector((state) => {
    return state?.detailNewsReducer?.detail;
  });
  const { News_Content, News_Title, Created_At, News_description } =
    detailContent;
  let NewArr = "";
  const fetchAudio = async (NewArr) => {
    const result =
    await axios
      .post(`${url}`, NewArr, config)
      .then((res) => {
        return res?.data?.async;
        // setSpeech(res?.data?.async);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
    setSpeech(result);
  };

  useEffect(() => {
    dispatch(fetchDetailRequest(id));
  }, [dispatch, id]);
  useEffect(() => {
    // let NewArr = "";
    console.log("check content:", News_Content);
    if (News_Content) {
      let collection = document.getElementsByClassName("Normal");

      Array.from(collection).forEach(function (element) {
        NewArr += element.innerHTML;
      });
    }
    console.log("Check newArr:", NewArr);
    fetchAudio(NewArr);
  }, [News_Content, NewArr, speech]);
  {
    console.log("check speech:", speech);
  }
  return (
    <>
      <div className="single">
        <h2>{News_Title}</h2>
        <audio controls>
          {speech && <source src={speech} type="audio/mpeg" />}
        </audio>
        <p className="date" style={{ marginTop: "25px" }}>{`${moment(
          `${Created_At}`
        ).format("LL")}`}</p>
        <p className="description">{News_description}</p>
        <div dangerouslySetInnerHTML={{ __html: News_Content }} />
        <Comments
          commentsUrl={`http://localhost:3000/${id}`}
          currentUserId="1"
        />
      </div>
    </>
  );
};

export default Single;
