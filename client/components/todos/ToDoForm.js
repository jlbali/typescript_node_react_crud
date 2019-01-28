

import React, {Component} from 'react';
import {Grid, Row, Col, Well, Button, FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import history from "../../history";
import $ from 'jquery';

import ToDosList from './ToDosList';
import {create, fetchItem, update} from '../../actions/todos';


class ToDoForm extends Component {

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
            $("#title").val(item.title);
            $("#description").val(item.description);
        }
    }


    resetForm(){
        this.setState({
            title: '',
            description: '',
        });
    }

    async onSubmit(e){
        e.preventDefault();
        if (!this.state.id){
            await create({
                title: $("#title").val(),
                description: $("#description").val(),
            });    
        } else {
            await update(this.state.id,{
                title: $("#title").val(),
                description: $("#description").val(),
            });
        }
        history.push("/main/todos");
    }

    onCancel(e){
        history.push("/main/todos");
    }


    render(){
        return (
            <Well>
                <Panel header="ToDos">
                    <FormGroup controlId="title">
                        <ControlLabel>Title </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter Title..."
                            id = "title"
                            ref="title" 
                        />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description </ControlLabel>
                        <FormControl
                            type="text"
                            placeholder ="Enter Description..."
                            id = "description"
                            ref="description" 
                        />
                    </FormGroup>
                    <Button onClick={this.onSubmit.bind(this)} bsStyle="primary">Save</Button>
                    <Button onClick={this.onCancel.bind(this)} bsStyle="primary">Cancel</Button>
            
                </Panel>
            </Well>

        )
        

    }

}

/*
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        create
    }, dispatch);
}
*/

//export default connect(mapDispatchToProps)(ToDoForm);
export default ToDoForm;