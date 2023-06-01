import { useState } from "react";
import "./style.scss";
import WallOfShameTableHead from "./wallOfShame-table";

const TableHeaderPart = ({ users }) => {
    const [name, setName] = useState("");
    const [excuse, setExcuse] = useState("");
    const [usersArray, setUsersArray] = useState(users);

    const handleClick = () => {
        if (name.trim() !== "" && excuse.trim() !== "") {
            let id = usersArray.length;
            setUsersArray((prev) => [
                ...prev,
                {
                    id: id++,
                    name: name,
                    excuse: excuse,
                    count: 1,
                },
            ]);
            setName("");
            setExcuse("");
        } else {
            alert("You must fill all gap!");
        }
    };

    return (
        <div>
            <header>
                <div>
                    <h1>Wall of shame</h1>
                    <p>{usersArray.length} members</p>
                </div>
                <div className="inputsContainer">
                    <div className="inputBox">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            placeholder="Excuse"
                            onChange={(e) => setExcuse(e.target.value)}
                            value={excuse}
                        />
                    </div>
                    <div>
                        <button onClick={handleClick}>Create</button>
                    </div>
                </div>
            </header>
            <WallOfShameTableHead
                users={usersArray}
                setUsersArray={setUsersArray}
            />
        </div>
    );
};
export default TableHeaderPart;
