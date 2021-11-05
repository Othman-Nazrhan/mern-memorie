import React, { useEffect , useState } from "react";
import { Container, AppBar, Grid, Grow, Typography } from "@material-ui/core"
import memories from "./images/memories.png";
import Posts from "./components/posts/posts";
import Form from "./components/form/Form";
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {getAllPosts} from "./actions/posts";

const App = () => {
  const classes= useStyles();
  const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch])



  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography  className={classes.heading} variant="h1" align="center" > Memories</Typography>
        <img  className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="espace-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
