import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import { getPhotosAction } from '../actions/photosActions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(4),
    },
    imageList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Photos = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const photos = useSelector( state => state.photos );
    console.log(photos);
  
    return ( 
        // <Grid container className={classes.root} spacing={2}>
        //     <Grid item md={12}>
        //         <Grid container justifyContent="center" spacing={spacing}>
        //         {[0, 1, 2].map((value) => (
        //             <Grid key={value} item>
        //             <Paper className={classes.paper} />
        //             </Grid>
        //         ))}
        //         </Grid>
        //     </Grid>
        // </Grid>
        <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {/* {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))} */}
          <ImageListItem key="">
            <img src="/" alt="." />
            <ImageListItemBar
              title="titulo"
            //   subtitle={<span>by: autor</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </ImageListItem>
      </ImageList>
    </div>
     );
}
 
export default Photos;