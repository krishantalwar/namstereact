
const element = React.createElement("input", { type: "text", id: "sss", key: "ii", ref: React.createRef() });
const elements = React.createElement("h1", { id: "sss", key: "iie" }, "the wossrk");

const parent = React.createElement("div", { "id": "parent" }, [
    element,
    React.createElement("div", { "id": "child" }, [
        React.createElement("h1", {}, "the fist child"),
        React.createElement("h1", {}, "the second child")
    ]),
    React.createElement("div", { "id": "child" }, [
        React.createElement("h1", {}, "the fist child"),
        React.createElement("h1", {}, "the second child")
    ])
])

console.log(element)
console.log(element.ref?.current)

console.log("elements", elements)
console.log("elements", elements.current)

// element.current = "1";
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root)
root.render(parent);
// Access the ref after rendering
setTimeout(() => {
    console.log('Input ref after rendering:', element.ref.current); // Logs the input element
    console.log("dd", element.key?.valueOf())
    if (element?.ref?.current) {
        element.ref?.current.focus(); // Focus the input element
        // element.key?.current.style.border = "5px solid green";      // not work assigment not allowed to direct element this way
        element.ref?.current.classList.add("abc");
    }
}, 1000);


// const { createElement, createRef } = React;
// const { createRoot } = ReactDOM;

// // Create a ref
// const inputRef = createRef();

// // Create the input element with a ref
// const element = createElement(
//     'input',
//     { type: 'text', id: 'sss', key: 'ii', ref: inputRef }
// );

// // Create the h1 element
// const elements = createElement(
//     'h1',
//     { id: 'sss', key: 'ii' },
//     'the wossrk'
// );

// // Log the elements
// console.log(element);
// console.log('Input ref:', inputRef.current); // Logs undefined initially
// console.log('Elements:', elements);

// // Render the input element
// const root = createRoot(document.getElementById('root'));
// root.render(element);

// // Access the ref after rendering
// setTimeout(() => {
//     console.log('Input ref after rendering:', inputRef.current); // Logs the input element
//     if (inputRef.current) {
//         inputRef.current.focus(); // Focus the input element
//         inputRef.current.style.border = "5px solid green";
//     }
// }, 1000); // Delay to ensure rendering is complete