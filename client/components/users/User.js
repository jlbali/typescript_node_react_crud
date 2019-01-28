
import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

import history from "../../history";
import {del, fetchAll} from "../../actions/users";

class User extends Component {
    
    async onDelete(){
        await del(this.props.item.id);
        this.props.dispatch(fetchAll());
    }

    onSelectItem(){
        history.push("/main/users/update/" + this.props.item.id);
    }

    render(){
        return (
        
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{this.props.item.name} </h6>
                        <div>  
                            Rol: {this.props.item.role.title}
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
      users: state.users,
    }
}
  
  
export default connect(mapStateToProps)(User);
  