import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    }
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        // display: 'flex',
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    h2: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '34px',
      textTransform: 'uppercase'
    },
    table: {
      minWidth: 800,
    },
    content: {
        display: 'flex', 
        marginLeft: 150
    },
    tr: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '20px'
    },
    td: {
      width: '100px',
      textAlign: 'justify'
    },
    message: {
      color: 'purple',
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold'
    }
  });

const CommentsTable = ({comment}) => {
    const classes = useStyles();

    const { name, email, body } = comment;
    return ( 
        <>
            <StyledTableRow className={classes.td}>
                <StyledTableCell className={classes.td} component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell className={classes.td} align="right">{email}</StyledTableCell>
                <StyledTableCell className={classes.td} align="right">{body}</StyledTableCell>
            </StyledTableRow>
        </>
     );
}
 
export default CommentsTable;