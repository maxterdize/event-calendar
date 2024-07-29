import './App.css'
import EventCalendar from "./components/event-calendar/EventCalendar.tsx";
import {Event} from "./components/model/interfaces/interfaces.tsx";
import {subDays } from "date-fns";
import {useState} from "react";

function App() {
   const [events] = useState<Event[]>([
       {date: subDays(new Date(), 13), title: "Go to the supermarket", city: "san jose"},
       {date: subDays(new Date(), 2), title: "Pickup kids from school", city: "heredia"},
       {date: subDays(new Date(), 3), title: "Play videogames", city: "cartago"},
   ]);

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
