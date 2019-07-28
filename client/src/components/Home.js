import React, { Component } from 'react'

class Home extends Component {
    
        state = {
             item:'',
             todoslist: [{_id:1, item:'Loading'}]
        }


    HandelSubmit = (e) => {
        e.preventDefault();

        let data = new URLSearchParams();

        for ( const pair of new FormData(e.target)) {
            data.append(pair[0], pair[1])
        };

        fetch('http://localhost:5000/sent', {
            method:'post',
            body:data
        }).then(res => res.json())
        .then(res2 => {
            console.log(res2);
            this.setState({
                todoslist:[...this.state.todoslist, res2], 
                item:''
            })
        })
    }

    remove = (id) => {
        fetch('http://localhost:5000/remove/'+id, {
            method:'delete'
        })
        .then(res => res.json())
        .then(res2 => {
            const newtodolist = this.state.todoslist.filter(item => {
                return item._id !== res2._id;
            });

            this.setState({
                todoslist:newtodolist
            })
        })
    }

    componentDidMount = () => {
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(res2 => {
           this.setState({
               todoslist: res2
           })
        })
    }
    
    render() {
            const List = this.state.todoslist.map(item => {
               return <li onClick = {() => this.remove(item._id)} key={item._id}>{item.item}</li>
            })
        return (
            <div>
               
                <div className='item-form'>
                <h1>My Todos List</h1>
                <form onSubmit = {this.HandelSubmit}>
                    <input type='text' name='item' value={this.state.item} 
                    onChange = {(e) => this.setState({ item:e.target.value})}/>
                    <button type='submit' className='add-btn'>ADD</button>
                </form>
                    <ul className='list-item'>
                        {List}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
