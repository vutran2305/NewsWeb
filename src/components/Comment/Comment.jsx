import CommentForm from "./CommentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "./Comment.css";
const Comment = ({
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  currentUserId,
  item,
}) => {
  moment.locale("vi");
  moment().format("LL");
  const isEditing =
    activeComment &&
    activeComment.id === item?.Cmt_Id &&
    activeComment.type === "editing";
  const canEdit = parseInt(currentUserId) === parseInt(item?.userId);
  const canDelete = parseInt(currentUserId) === parseInt(item?.userId);
  return (
    <>
      <div className="comment">
        <div className="comment-image-container">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{item?.username}</div>
            <div style={{ marginTop: "3px" }}>
              <span>{`${moment(
                `${
                  item?.Updated_At === null
                    ? item?.Created_At
                    : item?.Updated_At
                }`
              ).format("LL")}`}</span>
            </div>
          </div>
          {!isEditing && (
            <div className="comment-text">{item?.Cmt_Content}</div>
          )}
          {isEditing && (
            <CommentForm
              submitLabel="Cập Nhật"
              hasCancelButton
              initialText={item?.Cmt_Content}
              handleSubmit={(text) => updateComment(item?.Cmt_Id, text)}
              handleCancel={() => {
                setActiveComment(null);
              }}
            />
          )}
          <div className="comment-actions">
            {canEdit && (
              <div
                className="comment-action"
                onClick={() =>
                  setActiveComment({ id: item?.Cmt_Id, type: "editing" })
                }
              >
                Chỉnh sửa
              </div>
            )}
            {canDelete && (
              <div
                className="comment-action"
                onClick={() => deleteComment(item?.Cmt_Id)}
              >
                Xóa
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
