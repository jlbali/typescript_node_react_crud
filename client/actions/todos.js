

let _id = 1;

export function uniqueId(){
    return _id++;
}


export function create(element){
    return {
        type: 'CREATE_TODO',
        payload: {
            id: uniqueId(),
            title: element.title,
            description: element.description,
            status: 'Unstarted',
        }
    }
}


