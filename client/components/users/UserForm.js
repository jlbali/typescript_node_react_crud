import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button, FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from "../../history";
import $ from 'jquery';

import {create, fetchItem, update} from '../../actions/users';
import {fetchAll as fetchRoles} from '../../actions/roles';

class UserForm extends Component {

    constructor(props){
        super(props);
        var id = null;
        if (props.match.params.id){
            id = props.match.params.id;
        }
        this.state = {
            id : id,
        };
    }

    async componentDidMount(){
        if (this.state.id){
            //console.log("ID: ", this.state.id);
            var item = await fetchItem(this.state.id); // HORRIBLE.
            console.log("Item recibido: ", item);
            $("#name").val(item.name);
            $("#password").val(item.password);
            $("#email").val(item.email);            
        }
        this.props.dispatch(fetchRoles(function(){
            $("#role").val(item.roleId); // Maybe a problem since the roles may not be loaded yet.            
        }));
    }


    async onSubmit(e){
        e.preventDefault();
        if (!this.state.id){
            await create({
                name: $("#name").val(),
                password: $("#password").val(),
                email: $("#email").val(),
                roleId: $("#role").val(),
            });    
        } else {
            await update(this.state.id,{
                name: $("#name").val(),
                password: $("#password").val(),
                email: $("#email").val(),
                roleId: $("#role").val(),
            });
        }
        history.push("/main/users");
    }

    onCancel(e){
        history.push("/main/users");
    }


    render(){
        var rolesOptions = this.props.roles.items.map(function(role){
            return (
                <option value={role.id}>{role.title}</option>
            )
        });

        return (
            <Well>
                <Panel header="User">
                    <FormGroup controlId="name">
                        <ControlLabel>Username </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter login..."
                            id = "name"
                            ref="name" 
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter Password..."
                            id = "password"
                            ref="password" 
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <ControlLabel>E-Mail </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter e-mail..."
                            id = "email"
                            ref="email" 
                        />
                    </FormGroup>
                    <FormGroup controlId="role">
                        <ControlLabel>Role</ControlLabel>
                        <FormControl componentClass="select" id="role" ref="role">
                            {rolesOptions}
                        </FormControl>                
                    </FormGroup>

                    <Button onClick={this.onSubmit.bind(this)} bsStyle="primary">Save</Button>
                    <Button onClick={this.onCancel.bind(this)} bsStyle="primary">Cancel</Button>
            
                </Panel>
            </Well>

        )
        

    }

}


function mapStateToProps(state){
    return {
      roles: state.roles,
    }
}
  
  
export default connect(mapStateToProps)(UserForm);
  

//export default UserForm;