import React from "react";
import { Grid } from "@material-ui/core";
import InboxHeader from "./components/inboxHeader";
import InboxSearch from "./components/inboxSearch";
import InboxList from "./components/inboxList";
import useStyles from "./components/inboxComponents.style";

const ClientCommunicationInbox = (data: any) => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainRoot}>
            <InboxHeader />
            <InboxSearch />
            <InboxList data={data.data} />
        </Grid>
    );
};

export default ClientCommunicationInbox;