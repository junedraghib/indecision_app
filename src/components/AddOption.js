import React from 'react'
// import ReactDOM from 'react-dom'

export default class AddOption extends React.Component {

    state = {
        error: undefined
    }

    //constructor can be removed now as we have installed the 
    //babel-plugin-transform-class-properties

    // constructor(props) {
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.state = {
    //         error: undefined
    //     }
    // }

    //also we can define arrow function, without any explicit binding
    handleAddOption = (e) => {
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
                    this.state.error && <p className='add-option-error'>{this.state.error}</p>
                }
                <form
                    className='add-option' 
                    onSubmit={this.handleAddOption}
                >
                    <input className='add-option__input' type="text" name="option" placeholder="enter your option here..."/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}