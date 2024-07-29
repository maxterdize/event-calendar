import './App.css'
import EventCalendar from "./components/event-calendar/EventCalendar.tsx";
import { addDays, subDays } from "date-fns";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="calendar">
            <EventCalendar
                events = {[
                    {date: subDays(new Date(), 13), title: "Go to the supermarket", city: "san jose"},
                    {date: subDays(new Date(), 2), title: "Pickup kids from school", city: "heredia"},
                    {date: addDays(new Date(), 3), title: "Play videogames", city: "cartago"},
                ]}
            />
        </div>
    </>
  )
}

export default App
