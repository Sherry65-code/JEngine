function setBackground(urlforbackground) {
    document.body.style.backgroundImage = `url('` + urlforbackground + `')`;
}
function addObject(objname, objimg, objheight, objwidth, objposx, objposy) {

    document.body.innerHTML += `<img id="` + objname + `" src="` + objimg + `"
    height="`+ objheight + `" width="` + objwidth + `"
    style="position: absolute;left:`+ objposx + `;bottom: ` + objposy + `" class="coverimg">`;
}
function addRigidbody(objectname, bottomline = 0) {
    topx = document.getElementById(objectname).offsetTop;
    bottomheight = innerHeight - topx;
    while (bottomheight != bottomline) {
        bottomheight -= 1;
        document.getElementById(objectname).style.bottom = bottomheight + "px";
    }
}

function addShape(objid, shape, objcolor, objheight, objwidth, objposx, objposy) {
    if (shape == "cube") {
        document.body.innerHTML += `<div id="` + objid + `" style="left: ` + objposx + `;bottom: ` + objposy + `;background-color: ` + objcolor + `;width: ` + objwidth + `;height: ` + objheight + `;" class="coverimg"></div>`;
    }
}
function addTexture(objname, texturepack) {
    document.getElementById(objname).style.backgroundImage = `url('` + texturepack + `')`;
}
function setPosition(objname, positionY, positionX) {
    document.getElementById(objname).style.bottom = positionY + "px";
    document.getElementById(objname).style.left = positionX + "px";
}
function getUserInput(keynum)
{
    window.addEventListener('keydown',(event)=>{
        if (event.key == keynum)
        {
            return true;
        }
    });
}
function addForce(obj, x, y){
    document.getElementById(obj).style.transform = `translate(`+x+`%,`+y+`%)`;
}   
// User code
setBackground("test.png");
addShape("cube1", "cube", "black", "150px", "150px", "250px", "250px");
addTexture("cube1","https://opengameart.org/sites/default/files/RTS_Crate_0.png");
addRigidbody("cube1", 80);
addForce("cube1", 200, 0);
