import './ToDoItem.css';
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button'

export default class ToDoItem extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return (
            <div className="row">
                <div className="col-lg-11">
                    <p className="text">{this.props.todo}</p>
                </div>
                <div className="col-lg-1">
                    <Button variant="danger" onClick={this.props.remove}>Delete</Button>
                </div>
            </div>
        );
    }

}
