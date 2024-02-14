import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {id: 1, charge: "렌트비", amount: 1000},
        {id: 2, charge: "식비", amount: 2000},
        {id: 3, charge: "교재비", amount: 3000},
      ]
    }
  }

  handleDelete = (id) =>{
    const newExpenses = this.state.expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    this.setState({ expenses:newExpenses })
  }
  render() {
    return(
    <div className = "main-container">
      <h1>1월 가계부</h1>
      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseForm/>
      </div>
      <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
        <ExpenseList 
        initialExpenses={this.state.expenses}
        handleDelete={this.handleDelete}
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'end', marginTop: '1'}}>
        
      </div>
    </div>
    )
  }
}

export default App;