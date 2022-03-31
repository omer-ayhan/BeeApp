import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface CounterState {
  title: string;
  loading: boolean;
  prizeGoal: string;
  info: {phone: string; email: string};
  videoPoster: string;
  videoUrl: any;
  startDate: string;
  endDate: string;
  challengeName: string;
  prize: string;
  conditions: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  loading: false,
  prizeGoal: '20 saatte 1 mil tırmanmak',
  info: {phone: '0555 555 55 55', email: 'om.ayhan247@gmail.com'},
  videoPoster: 'https://baconmockup.com/300/200/',
  videoUrl: require('../../../../assets/example.mp4'),
  startDate: '2020-05-01',
  endDate: '2020-05-31',
  title: 'Redbull A.Ş',
  challengeName: 'Dağa tırmanmak',
  prize:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque vel asperiores possimus perspiciatis beatae error expedita eveniet adipisci consequatur!',
  conditions:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque vel asperiores possimus perspiciatis beatae error expedita eveniet adipisci consequatur!',
};

export const fetchPrize = createAsyncThunk('prize/fetch', async () => {
  return {
    prizeGoal: '20 saatte 1 mil tırmanmak',
    info: {phone: '0555 555 55 55', email: 'om.ayhan247@gmail.com'},
    videoPoster: 'https://baconmockup.com/300/200/',
    videoUrl: require('../../../../assets/example.mp4'),
    startDate: '2020-05-01',
    endDate: '2020-05-31',
    title: 'Redbull A.Ş',
    challengeName: 'Dağa tırmanmak',
    prize:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque vel asperiores possimus perspiciatis beatae error expedita eveniet adipisci consequatur!',
    conditions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque vel asperiores possimus perspiciatis beatae error expedita eveniet adipisci consequatur!',
  };
});

export const prizeSlice = createSlice({
  name: 'prize',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
  extraReducers: {
    [fetchPrize.pending.type]: state => {
      state.loading = true;
    },
    [fetchPrize.fulfilled.type]: (
      state,
      action: PayloadAction<CounterState>,
    ) => {
      state.title = action.payload.title;
      state.loading = false;
    },
    [fetchPrize.rejected.type]: (state, action: PayloadAction<any>) => {
      state.title = 'Error';
      state.loading = false;
    },
  },
});

export const {changeTitle} = prizeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.prize.title;

export default prizeSlice.reducer;
