import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import theme from "../../constants/theme";
import headerStyles from "./header.style";
import MenuImage from "../../assets/images/myServices/menu.svg";
import ChatImage from "../../assets/images/myServices/chat.svg";
import NotificationImage from "../../assets/images/myServices/notifications.svg";
import ProfileImage from "../../assets/images/myServices/Leo_official.png";
import logoutIcon from "../../assets/images/logout.svg";
import CustomAvatar from "../customAvatar/customAvatar";
import { Link } from "react-router-dom";
import { routers } from "../../config/routers";
import { RootState } from "../../interfaces";


const useHeaderStyles = makeStyles(headerStyles);

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [userActionBox, setUserActionBox] = useState<boolean>(false);

  const signOut = () => {
    localStorage.clear();
    dispatch({ type: "IMAGE_URL_FETCH", payLoad: "" });
    dispatch({ type: "RESET_LOGIN_USER", payLoad: {} });
    history.replace("/");
  };

  const sideBarToggle = () => {
    const sideBar = document.getElementById("sidebar");
    if (sideBar !== null) {
      if (sideBar.style.display === "none") {
        sideBar.style.display = "flex";
        sideBar.style.paddingTop = "120px";
      } else {
        sideBar.style.display = "none";
      }
    }
  };

  const toggleContainer = useRef<HTMLDivElement>(null);

  const userName = useSelector(
    (state: RootState) => state.currentUserName
  );
  const currentUser = useSelector(
    (state: any) => state.currentUser
  );
  useEffect(() => {
    console.log("Header currentUserName", currentUser.role);
    window.addEventListener("click", onClickOutsideHandler);
    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };
  });

  const onClickOutsideHandler = (event: MouseEvent) => {
    if (
      userActionBox &&
      toggleContainer.current &&
      !toggleContainer.current.contains(event.target as Node)
    ) {
      setUserActionBox(false);
    }
  };
  return (
    <Grid className={classes.header}>
      <Grid className={classes.logoRowWrapper}>
        <img
          src={MenuImage}
          alt="menu"
          className={classes.headerMenuIcon}
          onClick={() => sideBarToggle()}
        />
        <img src="/Gogh-logo.png" alt="logo" className={classes.logoImage} />
      </Grid>
      <Grid className={classes.profileSection}>
        <Box className={classes.profileSectionItem}>
          <Link
            to={currentUser.role == 1 ? routers.clientCommunication : routers.customerCommunication}
          >
            <img src={ChatImage} alt="chat" />
          </Link>
        </Box>
        <Box className={classes.profileSectionItem}>
          <img src={NotificationImage} alt="notification" />
          <Typography
            variant="body1"
            className={classes.notificationAlert}
          ></Typography>
        </Box>
        <Box
          className={classes.profileSectionItem}
          {...({ ref: toggleContainer } as any)}
        >
          <Box
            className={classes.profilePhotoWrapper}
            onClick={() => setUserActionBox(!userActionBox)}
          >
            <CustomAvatar
              size={30}
              firstName={userName.firstName.split(" ")[0].toUpperCase()}
              lastName={userName.lastName.split(" ")[0].toUpperCase()}
            />
          </Box>
          {userName && <Typography variant="body1" className={classes.profileName}>
            {userName.firstName} {userName.lastName}
          </Typography>}
          {userActionBox && (
            <Box className={classes.userActionBox}>
              <Box className={classes.tooltipArrow} />
              <ul className={classes.userActionButtonsList}>
                <li
                  className={classes.userActionButton}
                  onClick={() => signOut()}
                >
                  <img
                    src={logoutIcon}
                    className={classes.logoutIcon}
                    alt="sign out"
                  />
                  <Typography variant="body1">Log out</Typography>
                </li>
              </ul>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
