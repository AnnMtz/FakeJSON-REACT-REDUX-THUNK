import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getCommentsAction } from '../actions/commentsActions';
import { useDispatch, useSelector } from 'react-redux';
import CommentsTable from './CommentsTable';

const StyledTableCell = withStyles((theme) => ({
    head: {
      color: theme.palette.common.black,
      fontWeight: 'bold',
      fontSize: 18,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(name, email, body) {
    return { name, email, body };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
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

const Comments = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const comments = useSelector( state => state.comments.comments[0] )

    useEffect(() => {
      const loadingComments = () => dispatch(getCommentsAction());
      loadingComments();
      //eslint-disable-next-line
    }, [])

    return ( 
          <>
            <h2 className={classes.h2}>Comments list</h2>
            {/* {loading ? <p className={classes.message}>loading...</p>: null} */}
            <TableContainer component={Paper} className={classes.content}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell className={classes.tr}>Name</StyledTableCell>
                    <StyledTableCell className={classes.tr} align="right">Email</StyledTableCell>
                    <StyledTableCell className={classes.tr} align="right">Body</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { comments.length === 0 ? 'No posts available' : (
                    comments.map(comment => (
                      <CommentsTable 
                        key={comment.id}
                        comment = {comment}
                      />
                    ))
                  )}
                </TableBody>
              </Table>
          </TableContainer>
        </>
     );
}
 
export default Comments;