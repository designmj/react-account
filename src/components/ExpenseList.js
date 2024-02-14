import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'
import ExpenseItem from './ExpenseItem'
import "./ExpenseList.css"
export class ExpenseList extends Component {
  render() {
    console.log(this.props.initialExpenses)
    return (
      <React.Fragment>
        <ul className="list">
            {this.props.initialExpenses.map(expense => {
                return (
                    <ExpenseItem 
                    expense={expense} 
                    key={expense.id}
                    handleDelete={this.props.handleDelete}
                    />
                )
            })}
        </ul>
        <button className="btn">
            <MdDelete />목록 지우기
        </button>
      </React.Fragment>
    )
  }
}

export default ExpenseList
