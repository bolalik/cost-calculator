
function sections(data) {
    const postsRaw = data.records;
    let sections = postsRaw.map(obj => {
        let rObj = {}
        rObj['id'] = obj.id
        rObj['name'] = obj.fields.Name
        rObj['base'] = obj.fields.base
        rObj['extra'] = obj.fields.Extra

        return rObj
    });
    return sections
}

export default{
    sections
}