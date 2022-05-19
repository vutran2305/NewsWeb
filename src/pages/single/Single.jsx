/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import "./single.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailRequest } from "../../store/action/DetailAction";
import axios from "axios";
import moment from "moment";
import "moment/locale/vi";
const Single = () => {
  moment.locale("vi");
  moment().format("LL");
  const { id } = useParams();
  const [speech, setSpeech] = useState();
  /*
  tk account 1: tvv2k, pass: tvvDUE44k14@
   api-key: pf3R8KUQA38QoRuhApBVlBQsZZi6EUqy
   tk account 2: tvvdue4414, pass: tương tự
   "api-key": "8ZZ39H0kTOWmF56YMGkTMIHpW7GsbG7j",
   tk account 3: tvvdue, pass: tvvDUE44k14@
   apikey: "kK5WLZn5nddU3sgz0jjEH2KD2HbCmudY"
   */
  const url = "https://api.fpt.ai/hmi/tts/v5";
  let config = {
    headers: {
      "api-key": "kK5WLZn5nddU3sgz0jjEH2KD2HbCmudY",
      speed: "",
      voice: "linhsan",
    },
  };

  const dispatch = useDispatch();
  const detailContent = useSelector((state) => {
    return state?.detailNewsReducer?.detail;
  });
  const { News_Content, News_Tiltle, Created_At, News_description } =
    detailContent;
  let NewArr = "";
  const fetchAudio = async (NewArr) => {
    const result = await axios
      .post(`${url}`, NewArr, config)
      .then((res) => {
        // console.log("check res: ", res);
        return res?.data?.async;
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
    if (News_Content) {
      let collection = document.getElementsByClassName("Normal");

      Array.from(collection).forEach(function (element) {
        NewArr += element.innerHTML;
      });
    }
    console.log("Check newArr:", NewArr);
    fetchAudio(NewArr);
  }, [News_Content, NewArr]);
  {
    console.log("check speech:", speech);
  }
  return (
    <>
      <div className="single">
        <h2>{News_Tiltle}</h2>
        <audio controls>
          {speech && <source src={speech} type="audio/mpeg" />}
        </audio>
        <p className="date" style={{ marginTop: "25px" }}>{`${moment(
          `${Created_At}`
        ).format("LL")}`}</p>
        <p className="description">{News_description}</p>
        <div dangerouslySetInnerHTML={{ __html: News_Content }} />
      </div>
    </>
  );
};

export default Single;
