export function getValues(node) {
    const {title, body} = node;
    const newItem = {title: title.value, body: body.value};
    return newItem;
}