// export default function EntryCard(props){
//     const { date, title, description, mood: {label} } = props.entry
//     return(
//         <div className="entry-card">
//             <h4>{ title }</h4>
//             <h5>{ date }</h5>
//             <p>{ description }</p>
//             <p><span>Mood: </span>{ label }</p>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EntryCard(props) {
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
  const { date, title, description, mood: {label} } = props.entry

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { date }
        </Typography>
        <Typography variant="h5" component="h2">
          { title }
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          { description }
        </Typography>
        <Typography variant="body2" component="p">
          Mood: { label }
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small">Details</Button>
        <Button size="small">Edit</Button>
        <Button color="secondary" size="small" className="btn">Delete</Button>
      </CardActions>
    </Card>
  );
}
