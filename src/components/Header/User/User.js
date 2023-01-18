import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import {
  GlobalOutlined,
  QuestionCircleOutlined,
  CodeOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import styles from "./User.module.scss";
import Menu from "../../Propper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <GlobalOutlined />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <QuestionCircleOutlined />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  {
    icon: <CodeOutlined />,
    title: "Keyboard shortcuts",
  },
];

const User = ({ user, setIsSignUp }) => {
  const navigate = useNavigate();
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;

      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <UserOutlined />,
      title: "View profile",
    },
    {
      icon: <SettingOutlined />,
      title: "Change Password",
    },
    ...MENU_ITEM,
    {
      icon: <LogoutOutlined />,
      title: "Log out",
      separate: true,
    },
  ];
  const handleClickLogout = () => {
    localStorage.clear();
    setIsSignUp(false);
    navigate(0);
  };
  return (
    <Menu
      items={userMenu}
      onChange={handleMenuChange}
      callBack={handleClickLogout}
    >
      {user ? (
        <div className={cx("wrapper")}>
          <img className={cx("user-avatar")} src={user.avatar} alt="" />
        </div>
      ) : (
        <></>
      )}
    </Menu>
  );
};
export default User;
