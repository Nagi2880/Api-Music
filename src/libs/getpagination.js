// Create a limit for the route petition if i set size 3, in the route
// i have to write in the end 'size= "the number here without "" "'
export const getPagination =(page, size) =>{
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return {limit, offset}
}