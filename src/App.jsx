import React from "react";
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: '200px',
  },
}));

export default () => {
  const classes = useStyles()

    return (
      <div className={classes.root}>
        <Typography>
          <h1>Welcome!</h1>
        </Typography>
      </div>
    )
}
