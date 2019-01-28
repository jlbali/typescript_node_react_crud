import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button, FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from "../../history";
import $ from 'jquery';

import {create, fetchItem, update} from '../../actions/users';


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
            var item = await fetchItem(this.state.id); // HORRIBLE.
            console.log("Item recibido: ", item);
            $("#name").val(item.name);
            $("#password").val(item.password);
            $("#email").val(item.email);
        }
    }

    async onSubmit(e){
        e.preventDefault();
        if (!this.state.id){
            await create({
                name: $("#name").val(),
                password: $("#password").val(),
                email: $("#email").val(),
            });    
        } else {
            await update(this.state.id,{
                name: $("#name").val(),
                password: $("#password").val(),
                email: $("#email").val(),
            });
        }
        history.push("/main/users");
    }

    onCancel(e){
        history.push("/main/users");
    }


    render(){
        return (
            <Well>
                <Panel header="User">
                    <FormGroup controlId="title">
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
                    <Button onClick={this.onSubmit.bind(this)} bsStyle="primary">Save</Button>
                    <Button onClick={this.onCancel.bind(this)} bsStyle="primary">Cancel</Button>
            
                </Panel>
            </Well>

        )
        

    }

}


export default UserForm;