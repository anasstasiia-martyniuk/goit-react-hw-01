import css from "./Transactions.module.css"
export const Transactions = ({ items }) => {
    return (
        <>
            <table className={css.table}>
                <thead>
                    <tr className="css.tr">
                        <th className="css.th">Type</th>
                        <th className="css.th">Amount</th>
                        <th className="css.th">Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr  className="css.tr" key={item.id}>
                            <td className="css.td">{item.type}</td>
                            <td className="css.td">{item.amount}</td>
                            <td className="css.td">{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
};