
export default function refresh() {
    const content = document.getElementById('content');
    
    while(content.childElementCount >= 2) {
        content.removeChild(content.children[1]);
    }
}