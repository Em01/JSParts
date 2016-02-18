
import React, {Component} from 'react'
import _ from 'lodash'

import TicTacToeCell from './components/TicTacToeCell'
import TableData from './components/TableData'

export default class App extends Component{

  constructor(){
    super()
    this.state = {data: [['', '', ''], ['', '', ''], ['', '', '']]}
  }

  render(){
    const {data} = this.state ;

    const setCellState = (id, state ) => {

      const row = Math.ceil((id)/3) - 1;
      const cell = (id-1) % 3;
      this.state.data[row][cell] = state;

    }


    const cellClicked = id => {

      setCellState(id, 'X');
      this.setState(this.state);

      const empties = []

      let count = 0;
      _.each(this.state.data, row =>  {
        _.each(row, cell => {
          count++;
          if(cell===''){
            empties.push(count)
          }
        })
      })


      if(empties.length == 0){
        console.log('done')
        return
      }

      const computer = _.sample(empties);

      setCellState(computer, 'O');
      this.setState(this.state);

    }



    let count = 0;
    const cells = _(data)
    .map( row => {
      const rowCells = _.map(row, cell => {
        count++;
        return (<div key={count} ><TicTacToeCell
          key={count}
          id={count}
          data={cell}
          onClick={cellClicked}
        /></div>)
      })

      return (
        <div className="row" key={count}>
          {rowCells}
        </div>
      )

    })
    .value()

    return (
    <div>
      <h1>Header</h1>
      <div className="container">
        {/* {cells} */}
        <TableData />
      </div>

    </div>
    );
  }

}

