import "./calendar.css"

const Calendar = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timeSlots = generateTimeSlots();

    return (
        <div className="booking-calendar">
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        {daysOfWeek.map((day) => (
                        <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((timeSlot) => (
                    <tr key={timeSlot}>
                        <td>{timeSlot}</td>
                        {daysOfWeek.map((day) => (
                            <td key={`${day}-${timeSlot}`} className="time-slot">

                            </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <div className="book-now-button">
                <button><b>Book Now</b></button>
            </div>
        </div>
    )
}

const generateTimeSlots = () => {
    const startTime = 9;
    const endTime = 22;
    const interval = 30;

    const timeSlots = [];

    for (let hour = startTime; hour <= endTime; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            if (hour === endTime && minute > 0) break;
            const isAM = hour < 12;
            const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
            const formattedHour = hour12 < 10 ? `0${hour12}` : hour12;
            const formattedMinute = minute === 0 ? '00' : minute;
            const ampm = isAM ? 'AM' : 'PM';
            timeSlots.push(`${formattedHour}:${formattedMinute} ${ampm}`);
        }
    }

    return timeSlots;
}

export default Calendar