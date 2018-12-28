
import * as TodoService from "../services/todo.service";



export async function getAll(req, res, next){
    var elements = await TodoService.getAll();
    res.json(elements);
}


export async function get(req, res, next){
    var id = req.params.id;
    var element = await TodoService.get(id);
    res.json(element);
}

export async function create(req, res, next){
    await TodoService.create(req.body.item);
    res.json({
        success: true
    });
}

export async function update(req, res, next){
    var id = req.params.id;
    await TodoService.update(id, req.body.item);
    res.json({
        success: true
    });
}

export async function del(req, res, next){
    var id = req.params.id;
    await TodoService.del(id);
    res.json({
        success: true
    });
}
