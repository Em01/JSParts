import React,{Component} from 'react'


export default class TicTacToeCell extends Component {

  render(){
    const {data, id, onClick } = this.props


    const handleClick = event => {
      if(data==''){
        onClick(id)
        return
      }
      console.log('not empty slot')
    }

    return (
      <div
        onClick={handleClick}
        style={{ height:'50px', border:'1px solid black'}}
        className="col-xs-4" >
        {data}
      </div>
    );

  }

}

