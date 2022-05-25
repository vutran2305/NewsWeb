/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Spinner from "../../components/Spinner";
import CardTopic from "../../components/Card";
import { useLocation } from "react-router-dom";
import debounce from "lodash.debounce";
// import Pagination from "../../components/Pagination";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "./search.css";
const SearchPage = () => {
  const loca = useLocation();
  const history = useHistory();
  const value = loca.pathname.slice(8);
  const [keysearch, setKeysearch] = useState(value);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    // setKeysearch(value);
    debounceFn(value);
  };
  const handleSubmit = () => {
    history.push(`/search/${keysearch}`);
  };
  const fetchNews = async (keysearch) => {
    setLoading(true);
    await axios
      .post("http://localhost:4000/news/search", {
        News_Title: setKeysearch(keysearch),
      })
      .then((res) => {
        setResult(res?.data?.result);
        setLoading(false);
      });
    // setKeysearch(keysearch);
  };
  const debounceFn = useCallback(
    debounce((keysearch) => fetchNews(keysearch), 1000),
    []
  );

  useEffect(async () => {
    setLoading(true);
    await axios
      .post("http://localhost:4000/news/search", {
        News_Title: keysearch,
      })
      .then((res) => {
        setResult(res?.data?.result);
        setLoading(false);
      });
  }, [keysearch]);
  return (
    <>
      <div className="home">
        <div className="home-wrap">
          <div className="home-content search-content">
            <div className="search-container">
              <h2>Tìm Kiếm:</h2>
              <div className="list-topic">
                <div className="search-news" onSubmit={handleSubmit}>
                  <input
                    type={"search"}
                    placeholder="Tìm kiếm tin tức ..."
                    // value={keysearch === "undefined" ? "" : keysearch}
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
