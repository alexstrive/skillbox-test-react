export default function Modal() {
  return <div style={{
    position: "absolute",
    top: 200,
    width: "50vw",
    left: "25vw",
    background: "white",
    padding: 10,
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 100px"
  }}>
    <h3>Profile</h3>
    <p>Name: <span>Alex</span></p>
    <p>Birthday: <span>13.11.1999</span></p>
  </div>;
}