import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./customerTableComponents.style";
import { CustomerDataModel } from "../../../../interfaces/customers";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import { DELETE_CUSTOMER } from "../../../../store/actionNames/actionNames";
import threeDotIcon from "../../../../assets/images/myServices/3-dots-menu.svg";
import editIcon from "../../../../assets/images/myServices/edit.svg";
import deleteIcon from "../../../../assets/images/myServices/delete.svg";

interface CustomerRowActionWrapperProps {
  item: CustomerDataModel;
  setIsEdit: (isEdit: boolean) => void;
  currentUser: LogInUserTokens;
  setEditItem: (item: CustomerDataModel) => void;
  setAddCustomersModal: (modal: boolean) => void;
  customerID: string;
  sort: number;
  pageNumber: number;
}

const RowActionWrapper: React.FC<CustomerRowActionWrapperProps> = ({
  item,
  setIsEdit,
  setEditItem,
  setAddCustomersModal,
  customerID,
  currentUser,
  sort,
  pageNumber,
}) => {
  const dispatch = useDispatch();
  const [actionsBox, setActionsBox] = useState<boolean>(false);
  const classes = useStyles({ actionsBox });
  const toggleContainer = useRef<HTMLDivElement>(null);

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

  const deleteCustomer = (customerID: string) => {
    dispatch({
      type: DELETE_CUSTOMER,
      payLoad: {
        customerID,
        accessToken: currentUser.accessToken,
        sort,
        page: pageNumber,
        pageSize: 10,
      },
    });
  };
  return (
    <Box>
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
              onClick={() => {
                setIsEdit(true);
                setEditItem(item);
                setAddCustomersModal(true);
              }}
            >
              <img src={editIcon} alt="edit" />
              <Typography variant="body1" className={classes.actionText}>
                Edit&nbsp;Customer
              </Typography>
            </li>
            <li
              className={classes.actionItem}
              onClick={() => deleteCustomer(item.id)}
            >
              <img src={deleteIcon} alt="delete" />
              <Typography variant="body1" className={classes.actionText}>
                Delete&nbsp;Customer
              </Typography>
            </li>
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default RowActionWrapper;
