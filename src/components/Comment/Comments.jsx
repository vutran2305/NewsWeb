import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";
import "./Comment.css";

const Comments = ({ id }) => {
  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();
  const [total, setTotal] = useState();
  const [listComments, setListComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);

  const date = new Date().toISOString();
  const dateTruncate = date.substring(10, 0);
  const FetchComment = async (id) => {
    const result = await axios.get(`http://localhost:4000/comment/list/${id}`);
    setListComments(result?.data?.result);
    setTotal(result?.data?.total);
  };

  const addComment = async (text) => {
    const result = await axios.post("http://localhost:4000/comment/add", {
      userId: userId,
      News_Id: id,
      username: username,
      Cmt_Content: text,
      Created_At: dateTruncate,
      Updated_At: null,
    });
    if (result?.data?.result === "Insert thất bại") {
      toast.error("Gửi bình luận thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    } else {
      toast.success("Bình luận của bạn đã được gửi lên!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }

    setListComments(listComments.concat(result?.data?.result));
    //another way to add item:  setListComments([...listComments, result?.data?.result]);
    setTotal(total + 1);
    setActiveComment(null);
  };

  const updateComment = async (Cmt_Id, text) => {
    const result = await axios.put(
      `http://localhost:4000/comment/update/${Cmt_Id}`,
      {
        Cmt_Content: text,
        Updated_At: dateTruncate,
      }
    );
    if (result?.data?.result === "update thành công") {
      toast.success("Bình luận đã được cập nhật!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
      const updatedComments = listComments.map((item) => {
        if (item?.Cmt_Id === Cmt_Id) {
          return { ...item, Cmt_Content: text, Updated_At: dateTruncate };
        }
        return item;
      });
      setListComments(updatedComments);
      setActiveComment(null);
    } else {
      toast.error("Cập nhật bình luận thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    }
  };

  const deleteComment = async (Cmt_Id) => {
    if (window.confirm("Bạn có muốn xóa bình luận này không?")) {
      const result = await axios.delete(
        `http://localhost:4000/comment/delete/${Cmt_Id}`
      );
      if (result?.data?.result === "xoá dữ liệu comment thành công") {
        toast.success("Bình luận của bạn đã được xóa", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        setListComments(listComments.filter((item) => item.Cmt_Id !== Cmt_Id));
        setTotal(total - 1);
      } else {
        toast.error("Xóa bình luận thất bại!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
      }
    }
  };
  useEffect(() => {
    FetchComment(id);
    if (localStorage.getItem("status")) {
      setUsername(localStorage.getItem("username"));
      setUserId(localStorage.getItem("userId"));
    }
  }, [id]);
  return (
    <>
      {" "}
      <ToastContainer />{" "}
      <div className="comments">
        <p className="comments-title">
          Bình Luận (<span>{total}</span>)
        </p>
        {username ? (
          ""
        ) : (
          <div className="comment-form-title">
            Đăng nhập để gửi tới nhận xét về bài viết
          </div>
        )}
        <CommentForm submitLabel="Gửi" handleSubmit={addComment} />
        <div className="comments-container">
          {listComments.length > 0 ? (
            listComments.map((item, index) => (
              <Comment
                key={index}
                item={item}
                currentUserId={userId}
                deleteComment={deleteComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                updateComment={updateComment}
              />
            ))
          ) : (
            <div>
              <span>Chưa có bình luận trong bài viết</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Comments;
