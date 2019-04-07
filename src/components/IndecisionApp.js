import React from 'react'
import AddOption from './AddOption.js'
import Options from './Options.js'
import Action from './Action.js'
import Header from './Header.js'
import OptionModal from './OptionModal.js'
import Footer from './Footer.js'

export default class IndecisionApp extends React.Component {

    state = {
        options: [],//['Option one', 'Option two', 'Option three']
        selectedOption: undefined
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

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

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
        this.setState(() => ({
            selectedOption: option
        }))
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
        const links = {
            "github": "https://github.com/junedraghib",
            "linkedin": "https://www.linkedin.com/in/junedraghib/",
            "gmail":"mailto://raghibjuned@gmail.com"
        }
        return (
            <div className="main">
                <Header
                    title={title}
                    subtitle={subtitle}
                />

                <div className='container'>
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.hasOptions}
                    />

                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />

                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />

                </div>

                <Footer
                    title="Juned Raghib"
                    subtitle="Designed & Developed by :"
                    links={links}
                />

            </div>
        );
    }
}


IndecisionApp.defaultProps = {
    options: []
}