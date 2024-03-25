import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useMovieStore } from "../store";

const MovieCards = ({ movies }) => {
  const page = useMovieStore((state) => state.page);
  const setPage = useMovieStore((state) => state.setPage);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Grid container spacing={2}>
        {movies.results.map((e) => (
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
      <Box marginY={4} display="flex" justifyContent="center">
        <Pagination
          count={movies.total_pages}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </>
  );
};

export default MovieCards;
