/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import CardTopic from "../../components/Card";
import { useLocation } from "react-router-dom";
// import "./Topic.css";
import debounce from "lodash.debounce";
import Pagination from "../../components/Pagination";
import axios from "axios";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchPage = () => {
  const loca = useLocation();
  const value = loca.pathname.slice(8);
  console.log("check pathname:", loca.pathname);
  console.log("check includes:", loca.pathname.includes("/search"));
  // const [page, setPage] = useState(1);
  const [keysearch, setKeysearch] = useState(value);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  // const handleCurrentPage = (newPage) => {
  //   setPage(newPage);
  // };
  const handleChange = (event) => {
    const { value } = event.target;
    setKeysearch(value);
  };
  // const debounceFunc = debounce(function (value) {
  //   setKeysearch(value);
  // }, 500);
  useEffect(async () => {
    setLoading(true);
    await axios
      .post("http://localhost:4000/news/search", {
        News_Title: value,
      })
      .then((res) => {
        setResult(res?.data?.result);
        setLoading(false);
      });
  }, [value]);
  return (
    <>
      <div className="home">
        <div className="home-wrap">
          <div className="home-content search-content">
            <div className="search-container">
              <h2>Tìm Kiếm:</h2>
              <div className="list-topic">
                <div className="search-news" onSubmit>
                  <input
                    type={"search"}
                    placeholder="Tìm kiếm tin tức ..."
                    value={keysearch === "undefined" ? "" : keysearch}
                    onChange={handleChange}
                  />
                  <FontAwesomeIcon icon={faSearch} />
                </div>
                {loading ? (
                  <Spinner />
                ) : result === "lỗi d" ? (
                  <div className="no-content">
                    <span>
                      Không tìm thấy bài viết dựa trên kết quả tìm kiếm!
                    </span>
                  </div>
                ) : (
                  <>
                    {result.map((item, index) => (
                      <CardTopic key={index} item={item} />
                    ))}
                    {/* <Pagination
                      totalCount={total}
                      onPageChange={(page) => handleCurrentPage(page)}
                      siblingCount
                      currentPage={page}
                      limit={limit}
                    /> */}
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
export default SearchPage;
