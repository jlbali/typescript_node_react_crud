
import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import history from "../../history";
import {del, fetchAll as fetchToDos} from "../../actions/todos";

class ToDo extends Component {
    
    async onDelete(){
        await del(this.props.item.id);
        //history.push("/main/todos"); // No se ejecuta... porque no cambia url.
        this.props.dispatch(fetchToDos());

    }

    onSelectItem(){
        history.push("/main/todos/update/" + this.props.item.id);
    }

    render(){
        return (
        
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.item.title} </h6>
                        <div>  
                            {this.props.item.description}
                        </div>
                        <Button onClick={this.onDelete.bind(this)} bsStyle='danger'>Borrar</Button>
                        <Button onClick={this.onSelectItem.bind(this)}>Modificar</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
    


}
function mapStateToProps(state){
    return {
      todos: state.todos,
    }
}
  
  
export default connect(mapStateToProps)(ToDo);
  