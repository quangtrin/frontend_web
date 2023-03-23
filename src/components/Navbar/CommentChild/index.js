import classNames from "classnames/bind";
import styles from "./CommentChild.module.scss";

const cx = classNames.bind(styles);

function CommentChild({ data }) {
  return (
    <div className={cx("comment_child")}>
      <div className={cx("comment_child-avatar")}>
        <img
          src={
            data.avatar ||
            "https://products.popsww.comhttps://backend-test-production-0b5f.up.railway.app/api/v2/containers/file2/profiles/Adult-01.png"
          }
          alt="Avatar"
        />
      </div>
      <div className={cx("comment_child-body")}>
        <div className={cx("comment_child-body_message")}>
          <span className={cx("comment_child-message-name")}>
            {data.userName}
          </span>
          <span className={cx("comment_child-message-main")}>
            {data.comment}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentChild;
