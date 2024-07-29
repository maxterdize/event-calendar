import {eachDayOfInterval, endOfMonth, format, getDay, isToday, startOfMonth} from "date-fns";
import clsx from "clsx";
import {useMemo} from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
interface Event {
    date: Date,
    title: string,
    city: string
}

interface EventCalendarProps {
    events: Event[];
}
const EventCalendar = ({events}: EventCalendarProps) => {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    })

    const startingDayIndex = getDay(firstDayOfMonth);

    const eventsByDate = useMemo(() =>{
        return events.reduce((acc: {[key: string]: Event[]}, event) => {
            const dateKey = format(event.date, "yyyy-MM-dd");
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {});
    }, [events]);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {WEEKDAYS.map((day) => {
                    return (
                        <div key={day} className="font-bold text-center">
                            {day}
                        </div>
                    );
                })}
                {Array.from({length: startingDayIndex}).map((_, index) => {
                    return <div key={`empty-${index}`} className="text-center"/>;
                })}
                {daysInMonth.map((day, index) => {
                    const datekey = format(day, "yyyy-MM-dd");
                    const todaysEvents = eventsByDate[datekey] || [];
                    return (
                        <>
                            <div key={index} className={clsx("border rounded-md p-2 text-end min-h-32",
                                {
                                    "bg-gray-200": isToday(day),
                                    "text-gray-900": isToday(day),
                                })}>
                                {format(day, "d")}
                                <div className="text-center">
                                    {todaysEvents.map((event) => {
                                        return <div
                                            key={event.title}
                                            className="bg-green-200 rounded-md text-gray-900"
                                        >{event.title}</div>;
                                    })}
                                </div>
                            </div>
                        </>

                    );
                })}
            </div>
        </div>
    );
};

export default EventCalendar;