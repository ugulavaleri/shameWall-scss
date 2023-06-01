import "./style.scss";
import WallOfShameTable_body from "./wallOfShame-body";

const WallOfShameTable_head = ({ users, setUsersArray }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Excuse</th>
                    <th>Count</th>
                    <th></th>
                </tr>
            </thead>
            <WallOfShameTable_body
                users={users}
                setUsersArray={setUsersArray}
            />
        </table>
    );
};

export default WallOfShameTable_head;
