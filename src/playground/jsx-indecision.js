console.log("app.js is working")

//JSX = JavaSCript + XML

// boolean, null, undefined are ignored by the JSX
// for a logical and if first exp is true the second exp is returned
//else if first is false then then first is retured 

//app object
const app = {
    title: 'Indecision App',
    subtitle: 'This is a ReactJS app!!',
    options: []
}

//onformsubmit function

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderTemplate()
    }
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const removeAll = () => {
    app.options = []
    renderTemplate()
}

let key = 0;

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? "Here are your Options!!" : "No Options"}
            <div>
                <p>{app.options.length}</p>
                <button disabled={app.options.length === 0} onClick={makeDecision}>What should i do, Next?</button>
                <button onClick={removeAll}>Remove All</button>
                <ol>
                    {
                        app.options.map((option) => <li key={++key}>{option}</li>)
                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        </div>
    );

    ReactDOM.render(template, approot)
}

const approot = document.getElementById("approot")
renderTemplate();


//challenge
// const username = 'Juned Raghib'
// const age = 21
// const userlocation= 'New Delhi'

// const user = {
//     username: 'Juned Raghib',
//     userage: 21,
//     userlocation: 'New Delhi'
// }

// function getLocation(location) {
//     return location ? <p>Location: {location}</p> : undefined
// }

// const templateTwo =
//     (
//         <div>
//             <h1>{user.username ? user.username : 'Anonymous!'}</h1>
//             {user.userage >= 18 && <p> Age : {user.userage}</p>}
//             {getLocation(user.userlocation)}
//         </div>
//     );


