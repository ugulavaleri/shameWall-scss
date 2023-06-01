import "./style.scss";

const WallOfShameTable_body = ({ users, setUsersArray }) => {
    const handleIncrease = (id) => {
        setUsersArray((prev) =>
            prev.map((e) => {
                if (e.id === id) {
                    return { ...e, count: e.count + 1 };
                }
                return e;
            })
        );
    };

    return (
        <tbody>
            {users.map((e) => {
                return (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.excuse}</td>
                        <td>{e.count}</td>
                        <td>
                            <button onClick={() => handleIncrease(e.id)}>
                                Increase
                            </button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
export default WallOfShameTable_body;
