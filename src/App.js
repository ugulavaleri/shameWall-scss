import "./App.css";
import TableHeaderPart from "./components/WallOfShame-Scss/wallOfShame";

const users = [
    {
        id: 1,
        name: "Brad Simmons",
        excuse: "Remember when you were young you shone like the sun. Shine on you",
        count: 1,
    },
    {
        id: 2,
        name: "Brad Simmons",
        excuse: "Remember when you were young you shone like the sun. Shine on you",
        count: 1,
    },
];

function App() {
    return (
        <>
            <TableHeaderPart users={users} />
        </>
    );
}

export default App;
