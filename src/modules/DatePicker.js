import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

// const getCurrentDate = () => {
//     const today = new Date()
//     const now = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
//     return now
// }

export default function DatePicker(props) {
  const classes = useStyles();

  return (
      <TextField
        id="date"
        onChange={props.handleChange}
        label="Date"
        type="date"
        defaultValue={props.date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}