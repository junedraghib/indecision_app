class Counter extends React.Component {
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)

        //defining the dafault state for the component
        this.state = {
            count : 0
        }
    }
    
    addOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }
    
    componentDidMount(){
        try {
            const num = localStorage.getItem('count')
            const count = parseInt(num, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (error) {
            
        } 
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    render(){
        return(
            <div>
               <h1>Count : {this.state.count}</h1>
               <button onClick={this.addOne}>+1</button>
                <button onClick={this.reset}>reset</button>
                <button onClick={this.minusOne}>-1</button> 
            </div>
        );
    }
}

//default props values
// Counter.defaultProps = {
//     count : 11
// }

const jsx = (
    <div>
        <Counter />
    </div>
);

ReactDOM.render(jsx, document.getElementById('approot'))
// //counter example
// let count = 0;

// const addOne = () => {
//     count++;
//     // console.log('addone')
//     renderData()
// }

// const reset = () => {
//     count = 0;

//     renderData()
// }

// const minusOne = () => {
//     count--;
//     renderData()
// }

// const approot = document.getElementById("approot")

// const renderData = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={reset}>reset</button>
//             <button onClick={minusOne}>-1</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, approot)
// }

// renderData()
