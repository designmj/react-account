import React, { Component } from 'react'
import { MdSend } from 'react-icons/md'
import "./ExpenseForm.css"
export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">지출 항목</label>
                <input 
                type="text" 
                className="form-control" 
                id="charge"
                placeholder="예) 점심식사-학식">
                </input>
            </div>
            <div className="form-group">
                <label htmlFor="charge">지출 항목</label>
                <input 
                type="text" 
                className="form-control" 
                id="charge"
                placeholder="예) 점심식사-학식">
                </input>
            </div>
        </div>
        <button type="submit" className="btn">제출<MdSend className="btn-icon"/></button>
      </form>
    )
  }
}

export default ExpenseForm
