const parent  = React.createElement("div", {}, React.createElement("h1", {id: "child"}, "This is a child"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);