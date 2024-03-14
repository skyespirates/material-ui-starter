import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { movies } from "@utils/api";
import { Box } from "@mui/material";

const Movie = () => {
  const { movieId } = useParams();
  const { data, isSuccess } = useQuery({
    queryKey: ["movies", movieId],
    queryFn: async () => {
      const { data } = await movies.get(`/movie/${movieId}`);
      return data;
    },
  });
  return (
    <Box>
      {isSuccess && (
        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          alt={data.original_title}
          sx={{
            width: "100%",
          }}
        ></Box>
      )}
    </Box>
  );
};

export default Movie;
