import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post";
import useStyles from "./style"
import { Grid, CircularProgress } from '@material-ui/core';


const Posts = ({setCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((posts) => (
              <Grid key={posts._id} item xs={12} sm={6} md={6}>
                <Post post={posts} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      );
}

export default Posts;