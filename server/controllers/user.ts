import * as ModelService from "../services/user";


// Returns Users with the Role appended.
export async function getAll(req, res, next){
    var elements = await ModelService.decorateItems(await ModelService.getAll());
    console.log("Controllers getAll: ", elements);
    res.json(elements);
}

// Return User with the Role appended.
export async function get(req, res, next){
    var id = req.params.id;
    var element = await ModelService.decorateItem(await ModelService.get(id));
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

