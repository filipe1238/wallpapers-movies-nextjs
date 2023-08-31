import { configureStore } from "@reduxjs/toolkit";
import loading from "./loading/loading";

export default configureStore({
  reducer: {
    loading: loading.reducer,
  },
});