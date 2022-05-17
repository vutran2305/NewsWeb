import "./single.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailRequest } from "../../store/action/DetailAction";
// import dayjs from "dayjs";
import moment from "moment";
import "moment/locale/vi";
const Single = () => {
  moment.locale("vi");
  moment().format("LL");
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailContent = useSelector((state) => {
    return state?.detailNewsReducer?.detail;
  });
  const { News_Content, News_Tiltle, Created_At, News_description } =
    detailContent;
  useEffect(() => {
    dispatch(fetchDetailRequest(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="single">
        <h2>{News_Tiltle}</h2>
        <p className="date">{`${moment(`${Created_At}`).format("LL")}`}</p>
        <p className="description">{News_description}</p>
        <div dangerouslySetInnerHTML={{ __html: News_Content }} />
      </div>
    </>
  );
};
export default Single;
