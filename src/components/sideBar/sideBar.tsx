import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import sideBarStyles from "./sideBar.style";
import { pagesData, customerPagesData } from "../../constants/sidebar";
import { Link } from "react-router-dom";
import RouterIcon from "./iconSwitch";
import { RootState } from '../../interfaces';
import { useEffect } from "react";
import { useLocalStorage } from "../../shared/hooks";
import { LogInUserTokens } from "../../interfaces/userModels";


const useSideBarStyles = makeStyles(sideBarStyles);
interface SideBarProps {
  currentRouter: string;
}

interface SideBarDataModel {
  name: string;
  link: string;
}

const SideBar: React.FC<SideBarProps> = ({ currentRouter }) => {

  const dispatch = useDispatch();
  const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
    accessToken: "",
    refreshToken: "",
    role: 0,
  });
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const classes = useSideBarStyles();
  const isHidden = useMediaQuery("(max-width:780px)");
  let sideBarData = userToken.role == 1 ? pagesData : customerPagesData;
  useEffect(() => {
  }, [userToken]);
  return (
    <Grid
      id="sidebar"
      style={{ display: isHidden ? "none" : "flex" }}
      container
      direction="column"
      justify="space-between"
      className={classes.sideBar}
    >
      {sideBarData && <ul className={classes.sidebarRouters}>
        {sideBarData.map((item, i) => (
          <li key={i} className={classes.sidebarRouterItem}>
            <Link
              to={item.link}
              className={`${classes.routerLink} link-elements`}
              style={{
                backgroundColor:
                  currentRouter === item.name ? "#e6ebff" : "none",
              }}
            >
              <Typography
                variant="body1"
                className={classes.routerLinkIcon}
                style={{
                  color: currentRouter === item.name ? "#2255FF" : "none",
                }}
              >
                {RouterIcon(item.name)}
              </Typography>
              <Typography className={classes.routerLinkText} variant="body1">
                {item.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>}
      <ul className={classes.sidebarRouters}>
        <li className={classes.sidebarRouterItem}>
          <Link
            to={"/settings"}
            className={`${classes.routerLink} link-elements`}
            style={{
              backgroundColor:
                currentRouter === "settings" ? "#e6ebff" : "none",
            }}
          >
            <Typography
              variant="body1"
              className={classes.routerLinkIcon}
              style={{
                color: currentRouter === "settings" ? "#2255FF" : "none",
              }}
            >
              {RouterIcon("Settings")}
            </Typography>
            <Typography className={classes.routerLinkText} variant="body1">
              Settings
            </Typography>
          </Link>
        </li>
      </ul>
    </Grid>
  );
};

export default SideBar;
