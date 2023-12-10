import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data]; // return the data directly without creating a new array
  } catch (error) {
    console.error("Error:", error);
    throw error; // re-throw the error to handle it in the component
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPosts",
  async (payload) => {
    try {
      const response = await axios.post(POSTS_URL, payload);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // re-throw the error to handle it in the component
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              like: 0,
              dislike: 0,
              heart: 0,
              angry: 0,
              wow: 0,
            },
          },
        };
      },
    },
    AddReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const min = 1;
        const loadedPosts = action.payload.map((post, index) => {
          post.date = sub(new Date(), { minutes: min + index }).toISOString();
          post.reactions = {
            like: 0,
            dislike: 0,
            heart: 0,
            angry: 0,
            wow: 0,
          };
          return post;
        });
        state.posts = [...loadedPosts];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          like: 0,
          dislike: 0,
          heart: 0,
          angry: 0,
          wow: 0,
        };

        state.posts.push(action.payload);
      });
  },
});

export const { AddPost, AddReaction } = postSlice.actions;
export const selectPostById = (state, postId) => {
  return state.posts.posts.find(post => post.id == postId);
};

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postSlice.reducer;
