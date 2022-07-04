function TableAdmin({ rows, children }) {

    return (
        <>
            <div className="table-responsive">
                <table className="tableAdmin mb-0 table table-bordered table-striped table-hover">
                    <thead className="tableAdmin__thead">
                        <tr className="tableAdmin__tr">
                            {rows.map((row, index) => <th className="tableAdmin__th cursor-pointer" key={index}>{row}</th>)}
                        </tr>
                    </thead>
                    <tbody className="tableAdmin__tbody">
                        {children}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TableAdmin;