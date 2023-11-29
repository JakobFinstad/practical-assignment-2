const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button");
const shape = document.getElementById("shape");
const scaleX = document.getElementById("scale-x");
const scaleY = document.getElementById("scale-y");
const scaleZ = document.getElementById("scale-z");
const radi = document.getElementById("radius");
const height = document.getElementById("height");
const translationX = document.getElementById("translation-x");
const translationY = document.getElementById("translation-y");
const translationZ = document.getElementById("translation-z");
const rotationZ = document.getElementById("rotation-z");
const objects = document.getElementById("objects");

const scene = new Scene();


addButton.onclick = function() {
    const name = 'object_'.concat(shape.value).concat(String(Date.now()));
    const translation = [Number(translationX.value), Number(translationY.value), Number(translationZ.value)];
    const scale = [Number(scaleX.value), Number(scaleY.value), Number(scaleZ.value)];
    const rotation = Number(rotationZ.value);
    const radius = Number(radi.value);


    if (shape.value == "quad") {
        scene.addObject(new Quad(name, scale, translation, rotation));
    } else if (shape.value == "cube") {
        scene.addObject(new Cube(name, scale, translation, rotation));
    }else if (shape.value == "squarePyramid") {
        scene.addObject(new SquarePyramid(name, scale, translation, rotation));
    } else if (shape.value == "disk") {
        scene.addObject(new Disk(name, radius, translation, rotation));
    } else if (shape.value == "cone") {
        scene.addObject(new Cone(name, scale, translation, rotation));
    } else if (shape.value == "cylinder") {
        scene.addObject(new Cylinder(name, scale, translation, rotation));
    } else if(shape.value == "sphere") {
        scene.addObject(new Sphere(name, radius, translation, rotation));
    }
    scene.draw();

    updateObjectList();
};

removeButton.onclick = function() {
    scene.removeObject(objects.value);
    scene.draw();

    updateObjectList();
};

function updateObjectList() {
    objects.innerHTML = "";

    for (let object of scene.objects) {
        const option = document.createElement("option");
        option.innerHTML = object.name;
        objects.appendChild(option);
    }
}