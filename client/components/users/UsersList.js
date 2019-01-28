import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import User from './User';
import { fetchAll as fetchToDos} from '../../actions/users';

class UsersList extends Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.dispatch(fetchToDos());
    }
    

    render(){
        var items = this.props.users.items;
        return (
            <Grid>
                <Row style={{marginTop:'15px'}}>
                    <Col xs={12}>
                        Users
                        <div className="pull-right">
                            <Link to="/main/users/create" className="btn btn-xs btn-primary" role="button">New User</Link>
                        </div>
                        {items.map(item => (
                            <User key={item.id} item={item} />
                        ))}
                    </Col>
                </Row>
            </Grid>

        );
    }
    
}


function mapStateToProps(state){
    return {
      users: state.users,
    }
}
  
  
export default connect(mapStateToProps)(UsersList);
  