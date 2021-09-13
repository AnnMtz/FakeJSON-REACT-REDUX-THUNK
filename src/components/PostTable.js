import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

import { deletePostAction, getEditedPost } from '../actions/postsActions';

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

const PostTable = ({post}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const { title, body, id } = post;

    const confirmDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Canel'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deletePostAction(id));
            }
          })
      }

    const redirectEdit = post => {
        dispatch( getEditedPost(post))
        history.push(`/posts/edit/${post.id}`)
    }

    return ( 
        <>
              <StyledTableRow className={classes.td}>
                <StyledTableCell className={classes.td} component="th" scope="row">
                  {title}
                </StyledTableCell>
                <StyledTableCell className={classes.td} align="right">{body}</StyledTableCell>
                <StyledTableCell style={{width: '18%'}} align="right">
                    <Button
                        onClick={ () => redirectEdit(post)}
                    >
                      Edit
                    </Button>
                    <Button
                        onClick={() => confirmDelete(id)}
                    >
                      Delete
                    </Button>
                </StyledTableCell>
              </StyledTableRow>
    </>
     );
}
 
export default PostTable;