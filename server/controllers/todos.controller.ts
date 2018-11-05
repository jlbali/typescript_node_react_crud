
import * as TodoService from "../services/todo.service";



export async function getAll(req, res, next){
    var elements = await TodoService.getAll();
    res.json(elements);
}


export async function get(req, res, next){
    var id = req.body.id;
    var element = await TodoService.get(id);
    res.json(element);
}



