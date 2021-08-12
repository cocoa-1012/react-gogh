import React from "react";
import { Grid, Paper, Typography, Box, Hidden, Button, TextField } from "@material-ui/core";
import useStyles from "./inboxComponents.style";
import searchImg from "../../../../../../assets/images/search.svg";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const InboxSearch = () => {
    const classes = useStyles();
    return (
        <Paper component="form" className={classes.searchRoot}>
            <IconButton type="submit" className={classes.searchImg} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.searchInput}
                placeholder="Search for conversations"
            // inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
};

export default InboxSearch;