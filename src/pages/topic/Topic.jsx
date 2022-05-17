import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { fetchListTopicRequest } from "../../store/action/TopicAction";
import CardTopic from "../../components/Card";
import "./Topic.css";
import Pagination from "../../components/Pagination";
const TopicPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const loading = useSelector((state) => {
    return state?.listTopicReducer?.loading;
  });
  const listNewsTopic = useSelector((state) => {
    return state?.listTopicReducer?.list;
  });
  listNewsTopic.sort(function (a, b) {
    var dateA = new Date(a.Created_At),
      dateB = new Date(b.Created_At);
    return dateB - dateA;
  });
  const listNews = useSelector((state) => {
    return state?.listNewsReducer.list;
  });
  listNews.sort(function (a, b) {
    var dateA = new Date(a.Created_At),
      dateB = new Date(b.Created_At);
    return dateB - dateA;
  });

  const handleCurrentPage = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    dispatch(fetchListTopicRequest({ id, page }));
    setTotal(listNewsTopic?.length);
  }, [dispatch, id, listNewsTopic?.length, page]);
  console.log("check total:", total);
  return (
    <>
      <div className="home">
        <div className="home-wrap">
          <div className="home-content">
            <div className="topic-container">
              <h2>
                Danh Mục:
                <span>
                  {" "}
                  {id === "1"
                    ? "Thời Sự"
                    : id === "2"
                    ? "Thể Thao"
                    : id === "3"
                    ? "Giáo Dục"
                    : id === "4"
                    ? "Giải Trí"
                    : id === "5"
                    ? "Pháp Luật"
                    : id === "7"
                    ? "Y Tế"
                    : "Mới Nhất"}
                </span>
              </h2>
              <div className="list-topic">
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    {listNewsTopic.map((item, index) => (
                      <CardTopic key={index} item={item} />
                    ))}
                    <Pagination
                      totalCount={total}
                      onPageChange={(page) => handleCurrentPage(page)}
                      siblingCount
                      currentPage={page}
                      limit={3}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopicPage;