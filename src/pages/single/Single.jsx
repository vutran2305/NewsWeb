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
  const url = "https://api.fpt.ai/hmi/tts/v5";
  let config = {
    headers: {
      "api-key": "pf3R8KUQA38QoRuhApBVlBQsZZi6EUqy",
      speed: "",
      voice: "thuminh",
    },
  };

  const dispatch = useDispatch();
  const detailContent = useSelector((state) => {
    return state?.detailNewsReducer?.detail;
  });
  const { News_Content, News_Tiltle, Created_At, News_description } =
    detailContent;

  /*
   Get text of each element p with className Normal and concat them 
    let collection = document.getElementsByClassName("Normal");
  let NewArr = "";
  Array.from(collection).forEach(function (element) {
    NewArr += element.innerHTML;
  });
  console.log("check NewArr:", NewArr); 
   */

  const fetchAudio = async (News_Tiltle) => {
    const result = await axios
      .post(`${url}`, News_Tiltle, config)
      .then((res) => {
        console.log("check res: ", res);
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
    fetchAudio(News_Tiltle);
  }, [News_Tiltle]);
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
// const data = `${(
//   <div dangerouslySetInnerHTML={{ __html: News_Content }} />
// )}`;
export default Single;
