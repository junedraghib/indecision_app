class IndecisionApp extends React.Component{ 
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.hasOptions = this.hasOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []//['Option one', 'Option two', 'Option three']
        };
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options : []
            }
        })
    }

    hasOptions(){
        return this.state.options.length > 0
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option){
        if(!option){
            return "Enter a valid option"
        } else if(this.state.options.indexOf(option) > -1){
            return "This option already Exist!!"
        }
        
        this.setState((prevState) => {
            return {
                options : prevState.options.concat([option])
            }
        })
    }
    
    render(){
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
                />

                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions()}
                >
                    What should I do, next??
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All!!</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/> )
                }
            </div>
        );
    }
}

class Option extends React.Component{
    render() {
        return (
            <div>
                <p key={this.props.optionText}>{this.props.optionText}</p>
            </div>
        );
    }
}


class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error :undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {return {error}})
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
        <IndecisionApp />
    </div>
);

ReactDOM.render(jsx, document.getElementById("approot"))