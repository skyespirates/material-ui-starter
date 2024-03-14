import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieCards = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((e) => (
        <Grid key={e.id} item xs={4}>
          <Card>
            <CardMedia
              sx={{
                height: 140,
              }}
              image={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
              title={e.original_title}
            />
            <CardContent>
              <Typography
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {e.original_title}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/movies/${e.id}`}>
                <Button size="small">LEARN MORE</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieCards;
