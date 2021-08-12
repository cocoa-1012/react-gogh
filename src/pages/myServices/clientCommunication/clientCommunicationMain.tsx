import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import useStyles from "./clientCommunicationMain.style";
import MainLayout from "../../../layouts/main/mainLayout";
import ClientCommunicationInbox from "../../../components/clientCommunication/clientCommunicationInbox/clientCommunicationInbox";
import ClientCommunicationChatBox from "../../../components/clientCommunication/clientCommnucationChatBox/clientCommunicationChatBox";
import {
    CustomerResponseModel,
} from "../../../interfaces/customers";
import { CUSTOMERS } from "../../../store/actionNames/actionNames";
import { GET_CONVERSATION } from "../../../store/actionNames/actionNames";
import { useLocalStorage } from "../../../shared/hooks";
import { LogInUserTokens } from "../../../interfaces/userModels";
import { customerSortOrder } from "../../../constants/requestTypes";

interface CustomerRootState {
    customers: CustomerResponseModel;
}

const ClientCommunicationMainPage = () => {
    const classes = useStyles();
    const customer = useSelector((state: CustomerRootState) => state.customers.data);

    const [page, setPage] = useState<number>(1);
    const [sort, setSort] = useState<number>(customerSortOrder.createDateDesc);

    const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>(
        "userToken",
        {
            accessToken: "",
            refreshToken: "",
            role: 0,
        }
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: CUSTOMERS,
            payLoad: {
                accessToken: userToken.accessToken,
                sort: sort,
                page: page,
                pageSize: 10,
            },
        });
        dispatch({
            type: GET_CONVERSATION,
            payLoad: {
                accessToken: userToken.accessToken,
                page: page,
                pageSize: 10,
            },
        });
    }, []);

    return (
        <MainLayout currentRouter="">
            {customer && <Grid container direction="row" spacing={1} className={classes.pageContainer}>
                <Grid style={{ width: 400 }} >
                    <ClientCommunicationInbox data={customer} />
                </Grid>
                <Grid style={{ flexGrow: 3 }} >
                    <ClientCommunicationChatBox />
                </Grid>
            </Grid>}
        </MainLayout>
    );
};

export default ClientCommunicationMainPage;
