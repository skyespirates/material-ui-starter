import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { movies } from "@utils/api";
import CreditCard from "@components/CreditCard";

// material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

const Movie = () => {
  const { movieId } = useParams();
  const { data, isSuccess } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: async () => {
      const { data } = await movies.get(`/movie/${movieId}`);
      return data;
    },
  });
  const { data: credits, isSuccess: get } = useQuery({
    queryKey: ["detail", movieId],
    queryFn: async () => {
      const { data } = await movies.get(`/movie/${movieId}/credits`);
      return data;
    },
  });
  return (
    <Container>
      {isSuccess && (
        <Box>
          <Stack>
            <Typography variant="h2">{data.original_title}</Typography>
            <Stack direction="row">
              <Typography variant="body1">
                {data.release_date} &#8226; {data.runtime} m
              </Typography>
            </Stack>
          </Stack>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.original_title}
          />
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w780/${data.backdrop_path}`}
            alt={data.original_title}
          />
          <Box marginY={6}>
            <Stack direction="row" spacing={1}>
              {data.genres.map((genre) => (
                <Chip key={genre.id} label={genre.name} variant="outlined" />
              ))}
            </Stack>
            <Typography marginTop={2}>{data.overview}</Typography>
          </Box>
          <Stack direction="row" overflow="auto" columnGap={2}>
            {get &&
              credits.cast
                .slice(0, 10)
                .map((credit) => <CreditCard key={credit.id} data={credit} />)}
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Movie;
