// document.querySelector("btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("first");
// })

// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }

//     function handleMouseOver(e) {
//         e.preventDefault();
//         console.log('Your mouse on button.');
//         for (let index = 0; index < 5; index++) {
//             console.log('Your mouse on button.');
//         }
//     }

//     return ( < a href = "#"
//         onClick = {
//             handleClick
//         }
//         onMouseOver = {
//             handleMouseOver
//         } >
//         Click me </a>
//     );
// }

// import {
//     Component
// } from 'react'

// export default class AddEventClass extends Component {
//     render() {
//         return ( <
//             div > {
//                 AddEventClass
//             } < /div>
//         )
//     }
// }


let obj = {
    nameS: "Ali",
    greetings: () => {
        console.log("first")
    },
    greetings2() {
        console.log("veli")
    }
}

obj.nameS;
obj.greetings();
obj.greetings2();

let class2 = {
    shoot() {
        console.log("first");
    }
}

class2.shoot();