function Status({ status, type }) {
    return (
        <>
            <small className={`status status-${type}`}>{status}</small>
        </>
    );
}

export default Status;