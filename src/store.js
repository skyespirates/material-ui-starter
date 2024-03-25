import { create } from "zustand";

export const useMovieStore = create((set) => ({
  query: "",
  page: 1,
  setQuery: (q) => set({ query: q }),
  setPage: (pg) => set({ page: pg }),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
  nextPage: () => set((state) => ({ page: state.page + 1 })),
}));
