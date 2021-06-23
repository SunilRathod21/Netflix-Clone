import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setVideo } = videoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectVideo = (state) => state.video.video;

export default videoSlice.reducer;
