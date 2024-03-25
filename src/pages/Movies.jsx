import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieCards from "@components/MovieCards";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { movies } from "@utils/api";
import { useMovieStore } from "../store";
// import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const inputRef = useRef(null);
  const query = useMovieStore((state) => state.query);
  const setQuery = useMovieStore((state) => state.setQuery);
  const page = useMovieStore((state) => state.page);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get("q");
  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: async () => {
      const { data } = await movies.get("/search/movie", {
        params: {
          query,
          page,
        },
      });
      return data;
    },
    enabled: !!query,
  });

  const handleSearch = () => {
    setQuery(inputRef.current.value);
    // const input = inputRef.current.value;
    // setSearchParams({ q: input });
  };
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          width: 300,
          height: 48,
          mx: "auto",
          mt: 3,
          display: "flex",
          columnGap: 1,
        }}
      >
        <TextField
          inputRef={inputRef}
          label="Search movies"
          variant="standard"
          autoComplete="off"
          sx={{
            flexGrow: 1,
          }}
        />
        <Button
          onClick={handleSearch}
          variant="outlined"
          component="button"
          role={undefined}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>

      <Typography variant="h5" textAlign="center" marginY={4}>
        Movies
      </Typography>
      {isFetching && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}
      {isSuccess && <MovieCards movies={data} />}
    </Container>
  );
};

export default Movies;
