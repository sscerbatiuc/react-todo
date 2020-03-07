import './MainPage.css';
import Logo from './../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
import ToDoItem from './../todo/item/ToDoItem';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    'todo': 'Learn React'
                },
                {
                    'todo': 'Build a to-do app using React'
                }
            ],
            todo: ''
        };
    };

    add = () => {
        this.setState(({items, todo}) => ({
            items: [
                ...items,
                {
                    'todo': todo
                }
            ],
            todo: ''
        }));
    };


    onInputKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.add();
            }
        }
    };

    onChange = e => {
        this.setState({
            todo: e.target.value
        });
    };

    remove = indexToDelete => {
        this.setState(({items}) => ({
            items: items.filter((toDo, index) => index !== indexToDelete)
        }));
    };


    render() {
        return (
            <div>
                <div className="row">
                    <img className="logo" src={Logo} alt="React logo"/>
                </div>
                <div className="row">
                    <h1 className="header">To-Do React</h1>
                </div>
                {this.state.items.map((item, index) => {
                        return <ToDoItem
                            key={index}
                            todo={item.todo}
                            delete={this.remove.bind(this, index)}
                        />
                    }
                )}
                <hr/>
                <div className="row">
                    <InputGroup>
                        <FormControl
                            placeholder="To do..."
                            aria-label="to-do"
                            onChange={this.onChange}
                            onKeyPress={this.onInputKeyPress}/>
                        <InputGroup.Append>
                            <Button variant="success" onClick={this.add}>Add</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default MainPage;