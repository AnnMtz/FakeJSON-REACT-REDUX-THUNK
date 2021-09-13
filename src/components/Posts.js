import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/postsActions';
import PostTable from './PostTable';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    }
  }))(TableCell);

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

const Posts = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const posts = useSelector( state => state.posts.post);
    const loading = useSelector( state => state.posts.loading);

    console.log(posts);

    useEffect(() => {
      const loadingPosts = () => dispatch(getPosts());
      loadingPosts();
      //eslint-disable-next-line
    }, []);

    
    return ( 
      <>
      <h2 className={classes.h2}>Post list</h2>
      {loading ? <p className={classes.message}>loading...</p>: null}
      <TableContainer component={Paper} className={classes.content}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.tr}>Title</StyledTableCell>
              <StyledTableCell className={classes.tr} align="right">Body</StyledTableCell>
              <StyledTableCell className={classes.tr} align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { posts.length === 0 ? 'No posts available' : (
              posts.map(post => (
                <PostTable 
                  key={post.id}
                  post = {post}
                />
              ))
            )}
          </TableBody>
        </Table>
    </TableContainer>
    </>
     );
}
 
export default Posts;