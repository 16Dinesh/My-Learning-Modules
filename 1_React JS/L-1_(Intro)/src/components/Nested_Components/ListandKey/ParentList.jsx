import ChildList from "./ChildList";

export default function ParentList() {

    const dummyArray = ["hello", "hi", "greetings", "welcome", "good day"];

    return (
        <>
        <div>
            <h1>This is Parent List</h1>
            <ChildList list={dummyArray}/>
        </div>
        </>
    )
}