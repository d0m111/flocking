// const BOID_SPAWN_POINT = {
//     x: window.innerWidth / 2 - 1,
//     y: window.innerHeight / 2 - 1
//   };

export default function Boid() {
    let style = {
        position: "absolute",
        transform: "translate(50px, 75px) rotate(50rad) scale(.5)",
        "border-style": "solid",
        "border-width": `12.5px 0px 12.5px 30px`,
        "border-color": `transparent transparent transparent rgb(188, 87, 255)`
    }
    return(
        <div style={style}></div>
    )
}