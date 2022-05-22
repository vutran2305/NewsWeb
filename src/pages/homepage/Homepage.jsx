import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { fetchListRequest } from "../../store/action/NewsAction";
import { useLocation } from "react-router-dom";
import "./homepage.css";
import SlideShow from "../../components/SlideShow";
export default function Homepage() {
  const dispatch = useDispatch();
  const loca = useLocation();
  const loading = useSelector((state) => {
    return state?.listNewsReducer?.loading;
  });
  const listNews = useSelector((state) => {
    return state?.listNewsReducer.list;
  });
  const listThoiSu = listNews.filter((item) => {
    return item?.Topic_Id === 1;
  });
  const listTheThao = listNews.filter((item) => {
    return item?.Topic_Id === 2;
  });
  const listGiaoDuc = listNews.filter((item) => {
    return item?.Topic_Id === 3;
  });
  const listGiaiTri = listNews.filter((item) => {
    return item?.Topic_Id === 4;
  });
  const listPhapLuat = listNews.filter((item) => {
    return item?.Topic_Id === 5;
  });
  const listYTe = listNews.filter((item) => {
    return item?.Topic_Id === 7;
  });
  // const [newArray, setNewArray] = useState([]);
  // const map = new Map();
  // listNews.forEach((item) => {
  //   map.set(item?.Topic_Id, item);
  // });
  // for (let [a, b] of map) {
  //   newArray.push(b);
  // }
  useEffect(() => {
    dispatch(fetchListRequest());
  }, [dispatch]);
  return (
    <>
      <div className="home">
        <div
          className="home-wrap"
          style={{ paddingBottom: `${loca.pathname === "/" ? "0px" : ""}` }}
        >
          <div className="home-content">
            {loading ? (
              <Spinner />
            ) : (
              <>
                <SlideShow />
                <Posts topic={""} data={listNews} />
                <Posts topic={1} data={listThoiSu} />
                <Posts topic={2} data={listTheThao} />
                <Posts topic={3} data={listGiaoDuc} />
                <Posts topic={4} data={listGiaiTri} />
                <Posts topic={5} data={listPhapLuat} />
                <Posts topic={7} data={listYTe} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
