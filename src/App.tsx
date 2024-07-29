import './App.css'
import EventCalendar from "./components/event-calendar/EventCalendar.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./state/store.ts";

function App() {
    const events = useSelector((state: RootState) => state.events.value);
  return (
    <>
        <div className="calendar">
            <EventCalendar
                events={events}
            />
        </div>
    </>
  )
}

export default App
