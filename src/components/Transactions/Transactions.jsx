import css from "./Transactions.module.css"
export const Transactions = ({ items }) => {
    return (
        <>
            <table className={css.list}>
                <thead>
                    <tr className="css.tr-list">
                        <th className="css.thItem">Type</th>
                        <th className="css.thItem">Amount</th>
                        <th className="css.thItem">Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr  className="css.trList" key={item.id}>
                            <td className="css.tdItem">{item.type}</td>
                            <td className="css.tdItem">{item.amount}</td>
                            <td className="css.tdItem">{item.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
};