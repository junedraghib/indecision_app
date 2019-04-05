import React from 'react'
import AddOption from './AddOption.js'
import Options from './Options.js'
import Action from './Action.js'
import Header from './Header.js'

export default class IndecisionApp extends React.Component {

    state = {
        options: []//['Option one', 'Option two', 'Option three']
    }

    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.hasOptions = this.hasOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.state = {
    //         options: props.options//['Option one', 'Option two', 'Option three']
    //     };
    // }

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })

        //a better way
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    hasOptions = () => {
        return this.state.options.length > 0
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption = (option) => {
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
    componentDidMount = () => {
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
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }

        // console.log("component updated!!")
    }

    //just before the component goes away
    componentWillUnmount = () => {
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


IndecisionApp.defaultProps = {
    options: []
}