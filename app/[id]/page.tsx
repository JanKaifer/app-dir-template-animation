export default function (props: { id: string }) {
    console.log(props, props.id)
    return <div style={{
        border: "solid red 5px",
        height: 200,
        width: 200,
        fontSize: 72
    }}>{props.id}</div>;
}