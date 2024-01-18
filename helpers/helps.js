export function deleteChildNode(container) {
    while (container.hasChildNodes()) {
        container.childNodes.forEach(child => child.remove());
    }
}
export function generarID() {
    var id = "";
    var str ="0123456789";
    for (let i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        id += str.charAt(char);
    }
    return parseInt(id);
}