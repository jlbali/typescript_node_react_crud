


import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ToDo from './ToDo';
import { fetchAll as fetchToDos} from '../../actions/todos';

class ToDosList extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.dispatch(fetchToDos());
    }
    

    render(){
        var items = this.props.todos.items;
        return (
            <Grid>
                <Row style={{marginTop:'15px'}}>
                    <Col xs={12}>
                        ToDos
                        <div className="pull-right">
                            <Link to="/main/todos/create" className="btn btn-xs btn-primary" role="button">Nuevo ToDo</Link>
                        </div>
                        {items.map(item => (
                            <ToDo key={item.id} item={item} />
                        ))}
                    </Col>
                </Row>
            </Grid>

        );
    }
    
}


function mapStateToProps(state){
    return {
      todos: state.todos,
    }
}
  
  
export default connect(mapStateToProps)(ToDosList);
  