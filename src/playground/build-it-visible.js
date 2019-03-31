//might have been a good idea like anderw did, just by tracking visiblity in the state

class VisiblityToggle extends React.Component {
    
    constructor(props){
        super(props)
        //binding the methods
        this.showDetails = this.showDetails.bind(this)
        this.hideDetails = this.hideDetails.bind(this)

        //default state
        this.state = {
            buttonLabel     :   "Show Details",
            detailContent   :   "",
            onClickHandler  :   this.showDetails
        }
    }
    
    showDetails(){
        this.setState((prevState) => {
            return {
                buttonLabel     :   "Hide Details",
                detailContent   :   "here is some information. which can ve hidden using this button",
                onClickHandler  :   this.hideDetails
            }
        })
    }

    hideDetails(){
        this.setState((prevState) => {
            return {
                buttonLabel: "Show Details",
                detailContent: "",
                onClickHandler: this.showDetails
            }
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.state.onClickHandler}>{this.state.buttonLabel}</button>
                <p>{this.state.detailContent}</p>
            </div>
        )
    }
}

ReactDOM.render(<VisiblityToggle />, document.getElementById("approot"))

//initial approach

// const app = {
//     title: "Visiblity Toggle",
//     hidden:true,
//     detail:"here is some information that you can view now!!!"
// }

// const showDetail = () => {
//     app.hidden = false
//     render()
// }

// const hideDetail = () => {
//     app.hidden = true
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={app.hidden ? showDetail : hideDetail}>{app.hidden ? "Show Details" : "Hide Details"}</button>
//             <p>{app.hidden ? undefined : app.detail}</p>
//         </div>
//     );

//     ReactDOM.render(template, approot)
// }

// const approot = document.getElementById("approot")
// render()