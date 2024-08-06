import {X} from "lucide-react";
import {EventDetailsProps} from "../model/interfaces/interfaces.tsx";
import {format, parse} from "date-fns";
import {useDispatch} from "react-redux";
import {updateEvents} from "../../state/events/EventsSlice.ts";

const EventDetails = ({event, onClose}: EventDetailsProps) => {
    const dispatch = useDispatch();
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-white">
                <button onClick={onClose} className="place-self-end"><X size={30}/></button>
                <div className="bg-indigo-400 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
                    <h1 className="text-3xl font-extrabold">Event Details</h1>
                    <form onSubmit={(event) => {
                        console.log(event.target[0].value)
                        event.preventDefault();
                        dispatch(updateEvents({
                            date: parse(event.target[0].value, "yyyy-MM-dd", new Date()),
                            title: event.target[1].value,
                            city: event.target[2].value
                        }));
                        onClose();
                    }}>
                        <label>
                            Date:
                            <input type="date" name="text" defaultValue={format(event?.date ? event.date : new Date(), "yyyy-MM-dd")}
                                   className="bg-white w-full px-4 py-3 text-black border-gray-300 rounded-md"/>
                        </label>

                        <label>
                            Title:
                            <input type="text" name="title" defaultValue={event?.title}
                                   className="bg-white w-full px-4 py-3 text-black border-gray-300 rounded-md"/>
                        </label>

                        <label>
                            City:
                            <input type="text" name="city" defaultValue={event?.city}
                                   className="bg-white w-full px-4 py-3 text-black border-gray-300 rounded-md"/>
                        </label>

                        <button
                            type="submit"
                            className="mt-4 m-auto w-5/12 flex items-center justify-center px-5 py-3 font-medium rounded-md"
                        >Update</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;