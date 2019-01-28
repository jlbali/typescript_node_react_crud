
import * as ModelService from "../services/todo";



export async function getAll(req, res, next){
    var elements = await ModelService.getAll();
    res.json(elements);
}


export async function get(req, res, next){
    var id = req.params.id;
    var element = await ModelService.get(id);
    res.json(element);
}

export async function create(req, res, next){
    await ModelService.create(req.body.item);
    res.json({
        success: true
    });
}

export async function update(req, res, next){
    var id = req.params.id;
    await ModelService.update(id, req.body.item);
    res.json({
        success: true
    });
}

export async function del(req, res, next){
    var id = req.params.id;
    await ModelService.del(id);
    res.json({
        success: true
    });
}
