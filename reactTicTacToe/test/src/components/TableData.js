import React, {Component} from 'react'
import _ from 'lodash'


export default class TableData extends Component {
  constructor(){
    super()

    this.state = {
      search:'',
      page: 0,
      onPage: 2,
      data : [
        {
          id:1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          id:2,
          firstName: 'Jack',
          lastName: 'Sparrow',
        },
        {
          id:3,
          firstName: 'Richard',
          lastName: 'Snow',
        },
        {
          id:4,
          firstName: 'Elisabeth',
          lastName: 'Golden',
        },
        {
          id:5,
          firstName: 'Michael',
          lastName: 'Jackson',
        },
      ]
    }
  }


  render(){
    const {data, search, page, onPage} = this.state

    const doSearch = event => {
      const value = event.target.value
      this.state.search = value
      this.setState(this.state)
    }

    const changeOnPage = event => {
      console.log(event.target.value)

      this.state.onPage = event.target.value
      this.setState( this.state )

    }


    const searchInName = ({name}) => {
      return name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    }

    const paginate = (data, index) => (index >= page*onPage && index < (page+1)*onPage)


    const rows = _(data)
    .map( ({id, firstName, lastName}) => ({id, name: firstName + ' ' + lastName}))
    .filter(searchInName)
    .filter(paginate)
    .map( row => (<tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.name}</td>
    </tr>))
    .value()

    console.log(data)

    return (
      <div>
        <input type="text" onChange={doSearch}/>

        <select onChange={changeOnPage}>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="3">3</option>
        </select>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
