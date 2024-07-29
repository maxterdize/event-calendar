import {subDays} from "date-fns";
import {Event} from "../../components/model/interfaces/interfaces.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface EventsState {
    value: Event[];
}

const initialState: EventsState = {
    value: [
        {date: subDays(new Date(), 13), title: "Go to the supermarket", city: "San José"},
        {date: subDays(new Date(), 2), title: "Pickup kids from school", city: "Heredia"},
        {date: subDays(new Date(), 3), title: "Play video games", city: "Cartago"},
    ]
};

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        updateEvents: (state, action: PayloadAction<Event>   ) => {

        const index = state.value.findIndex(event => event.title.toLowerCase() === action.payload.title.toString().toLowerCase());
        if (index !== -1) {
            // If the newEvent.title exists, update the event
            state.value[index] = action.payload;
        } else {
            // If it doesn't exist add it to the state
            state.value.push(action.payload);
        }
        }
    }
});

export const {updateEvents} = eventsSlice.actions;

export default eventsSlice.reducer;