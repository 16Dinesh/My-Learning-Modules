

export default function ChildList({list}) {
    console.log(list);

    return (
        <>
        <div>
            <h6>This is Child List</h6>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))
            }
        </div>
        </>
    )
}