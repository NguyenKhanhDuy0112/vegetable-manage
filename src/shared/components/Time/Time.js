function Time( {days, hours, minutes, seconds} ) {
    return (
        <>
            <span className="time__dealWeek-time">{days}</span>
            <span className="mx-2 fw-bold text-secondary">:</span>
            <span className="time__dealWeek-time">{hours}</span>
            <span className="mx-2 fw-bold text-secondary">:</span>
            <span className="time__dealWeek-time">{minutes}</span>
            <span className="mx-2 fw-bold text-secondary">:</span>
            <span className="time__dealWeek-time">{seconds}</span>
        </>
    );
}

export default Time;