export default function ({ params }: { params: { id: string } }) {
    return <div style={{
        border: "solid red 5px",
        height: 200,
        width: 200,
        fontSize: 72
    }}>{params.id}</div>;
}