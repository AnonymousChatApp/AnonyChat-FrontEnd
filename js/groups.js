function createGroup() {
    var node = document.createElement("a");
    var textnode = document.createTextNode("Water");         
    node.appendChild(textnode);  
    node.href = "#Scoopydiscoop";                     
    document.getElementsByClassName("left-part")[0].appendChild(node); 

}
