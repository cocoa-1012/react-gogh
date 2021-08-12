import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TableRow, TableCell, Box, Typography, Grid } from "@material-ui/core";
import useStyles from "./serviceListRow.style";
// import rearrangeIcon from "../../../assets/images/myServices/rearrange.svg";
import threeDotIcon from "../../../assets/images/myServices/3-dots-menu.svg";
import { MyServicesDataModel } from "../../../interfaces/myServices";
import editIcon from "../../../assets/images/myServices/edit.svg";
import deleteIcon from "../../../assets/images/myServices/delete.svg";
import { DELETE_SERVICE } from "../../../store/actionNames/actionNames";
import { LogInUserTokens } from "../../../interfaces/userModels";

interface ServiceRowProps {
  item: MyServicesDataModel;
  currentUser: LogInUserTokens;
  pageNumber: number;
  setIsEdit: (isEdit: boolean) => void;
  setEditItem: (item: MyServicesDataModel) => void;
  setAddServicesModal: (modal: boolean) => void;
}

const ServiceListRow: React.FC<ServiceRowProps> = ({
  item,
  currentUser,
  pageNumber,
  setIsEdit,
  setEditItem,
  setAddServicesModal,
}) => {
  const dispatch = useDispatch();
  const [actionsBox, setActionsBox] = useState<boolean>(false);
  const [images, setImages] = useState<number>(3);
  const [descriptionLimit, setDescriptionLimit] = useState<boolean>(false);
  const classes = useStyles({ actionsBox, descriptionLimit });
  const toggleContainer = useRef<HTMLDivElement>(null);

  const deleteService = (serviceID: string | null) => {
    dispatch({
      type: DELETE_SERVICE,
      payLoad: {
        serviceID: serviceID,
        user: currentUser.accessToken,
        page: pageNumber,
        pageSize: 10,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);

    return () => {
      window.removeEventListener("click", onClickOutsideHandler);
    };
  });

  const onClickOutsideHandler = (event: MouseEvent) => {
    if (
      actionsBox &&
      toggleContainer.current &&
      !toggleContainer.current.contains(event.target as Node)
    ) {
      setActionsBox(false);
    }
  };

  const openEditModal = () => {
    setIsEdit(true);
    setEditItem(item);
    setAddServicesModal(true);
  };
  return (
    <React.Fragment>
      <TableRow>
        <TableCell align="left" className={classes.serviceTableText}>
          {item.name}
        </TableCell>
        <TableCell align="left" className={classes.serviceTableText}>
          <Grid container direction="row" alignItems="center">
            <Typography variant="body1" className={classes.description}>
              {item.description.length < 50 ? item.description : !descriptionLimit ? item.description.slice(0, 50) : item.description}
            </Typography>
            {item.description.length > 50 && (
              <Typography
                variant="body1"
                className={classes.readMore}
                onClick={() => setDescriptionLimit(!descriptionLimit)}
              >
                {!descriptionLimit ? "(Read more)" : "(Less)"}
              </Typography>
            )}
          </Grid>
        </TableCell>
        <TableCell align="left" className={classes.serviceTableText}>
          <TableCell align="left" className={classes.imageGallery}>
            {item.photos.slice(0, images).map((photo: string, k: number) => (
              <img
                src={photo}
                alt="gallery"
                key={k}
                className={classes.galleryImage}
              />
            ))}
            {item.photos.length > 3 && item.photos.length !== images && (
              <Box className={classes.imageExtButton}>
                <Typography
                  variant="body1"
                  className={classes.imageExtButtonText}
                >
                  +{item.photos.length - 3}
                </Typography>
              </Box>
            )}
          </TableCell>
        </TableCell>
        <TableCell align="left" className={classes.serviceTableText}>
          0 subs
        </TableCell>
        <TableCell align="left" className={classes.serviceTableText}>
          {item.pricingType === 1 ? "Hourly" : "Fixed"}
        </TableCell>
        <TableCell
          align="left"
          className={`${classes.serviceTableText} ${classes.hourlyTextColor}`}
        >
          ${item.amount}
          {item.pricingType === 1 ? "/h" : ""}
        </TableCell>
        <TableCell align="left" className={classes.rowActionsWrapper}>
          <Box
            {...({ ref: toggleContainer } as any)}
            className={classes.rowActionButton}
            onClick={() => setActionsBox(!actionsBox)}
          >
            <img src={threeDotIcon} alt="three dots" />
          </Box>
          {actionsBox === true && (
            <Box className={classes.rowActionsBox}>
              <Box className={classes.tooltipArrow} />
              <ul className={classes.actionListWrapper}>
                <li
                  className={classes.actionItem}
                  onClick={() => openEditModal()}
                >
                  <img src={editIcon} alt="edit" />
                  <Typography variant="body1" className={classes.actionText}>
                    Edit service
                  </Typography>
                </li>
                <li
                  className={classes.actionItem}
                  onClick={() => deleteService(item.id)}
                >
                  <img src={deleteIcon} alt="delete" />
                  <Typography variant="body1" className={classes.actionText}>
                    Delete service
                  </Typography>
                </li>
              </ul>
            </Box>
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default ServiceListRow;
