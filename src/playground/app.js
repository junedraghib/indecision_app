class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.hasOptions = this.hasOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options//['Option one', 'Option two', 'Option three']
        };
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })

        //a better way
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    hasOptions() {
        return this.state.options.length > 0
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
            return "Enter a valid option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already Exist!!"
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     }
        // })

        //a better way : to implicitly returning values
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    // when component mounted for the first time
    componentDidMount() {
        // console.log("component mounted!!")
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) {
                this.setState(() => ({ options: options }))
            }
        } catch (error) {
            //no thing
        }
    }

    //when component is updated
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }

        // console.log("component updated!!")
    }

    //just before the component goes away
    componentWillUnmount() {
        // console.log("component unmounted!")

    }

    render() {
        const title = "Indecision App"
        const subtitle = "Put your life into the hand of a computer!!"
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />

                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.hasOptions}
                />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />

                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    );
}

//default props
Header.defaultProps = {
    title: "Indecision!!"
}

IndecisionApp.defaultProps = {
    options: []
}

// //class based react component 
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h3>{this.props.subtitle}</h3>
//             </div>
//         );
//     }
// }


//sateless component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions()}
            >
                What should I do, next??
                </button>
        </div>
    );
}


// //class based component
// class Action extends React.Component{
//     render(){
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions()}
//                 >
//                     What should I do, next??
//                 </button>
//             </div>
//         );
//     }
// }

//stateless component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All!!</button>
            {
                props.options.length === 0 && <p>Please add options to get Started</p>
            }
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
        </div>
    );
}


// class based componets 
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All!!</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}/> )
//                 }
//             </div>
//         );
//     }
// }


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                // we are defining onClick like this because otherwise onclick will be
                //returning an event object
                onClick={
                    (e) => {
                        props.handleDeleteOption(props.optionText);
                    }
                }
            >
                Remove
            </button>
        </div>
    );
}

// //class based component
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p key={this.props.optionText}>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }



//class based components : not a good idea to convert it into stateless component as it is alraedy 
//mantaning a state within it
class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => { return { error } })

        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


const jsx = (
    <div>
        <IndecisionApp options={["first", "second"]} />
    </div>
);

ReactDOM.render(jsx, document.getElementById("approot"))