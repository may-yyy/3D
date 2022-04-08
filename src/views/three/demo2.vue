<template>
    <div id="demo2">

    </div>
</template>

<script lang="ts" setup>
//引入
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'//相机控件
import {onMounted} from "vue";
import * as THREE from "three";


let scene, camera, mesh, renderer, controls;

onMounted(() => {
    init()
})

const init = () => {
    createScene();
    createMesh();
    // createMesh2();
    // createMesh3();
    createLight();
    createCamera();
    createRender();
    createControls();
    render();


}
//创建场景
const createScene = () => {
    scene = new THREE.Scene()
    // 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
    // var axisHelper = new THREE.AxisHelper(250);
    // scene.add(axisHelper);
}

//创建网格模型(立方体)
const createMesh = () => {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    //材质
    const material = new THREE.MeshLambertMaterial({
        color: 0xe1e1e5,

    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh)
}

//创建网格模型（球体）
const createMesh2 = () => {
    var geometry2 = new THREE.SphereGeometry(60, 40, 40);
    var material2 = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
        // opacity:0.7,
        // transparent:true,

    });
    var mesh2 = new THREE.Mesh(geometry2, material2); //网格模型对象Mesh
    mesh2.translateY(120); //球体网格模型沿Y轴正方向平移120
    scene.add(mesh2);
}

// const createMesh3 = () => {
//     // 圆柱网格模型
//     var geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25);
//     var material3 = new THREE.MeshLambertMaterial({
//         color: 0xffff00
//     });
//     var mesh3 = new THREE.Mesh(geometry3, material3); //网格模型对象Mesh
// // mesh3.translateX(120); //球体网格模型沿Y轴正方向平移120
//     mesh3.position.set(120,0,0);//设置mesh3模型对象的xyz坐标为120,0,0
//     scene.add(mesh3); //
// }


// 创建光源
const createLight = () => {
    //点光源
    const point = new THREE.PointLight(0xffffff);
    //点光源的位置
    point.position.set(400, 200, 300);
    scene.add(point);

    // 点光源2  位置和point关于原点对称
    // var point2 = new THREE.PointLight(0xffffff);
    // point2.position.set(-400, -200, -300); //点光源位置
    // scene.add(point2); //点光源添加到场景中

    //环境光
    const ambient = new THREE.AmbientLight(0x66666);
    scene.add(ambient)
}
// 创建相机
const createCamera = () => {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(200, 300, 200);
    camera.lookAt(scene.position)
}
// 创建渲染器
const createRender = () => {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1100, 550);
    renderer.setClearColor(0x545454, 1);
    const element = document.getElementById('demo2');
    element.appendChild(renderer.domElement)
}
// 创建控件对象(鼠标控制旋转，移动)
const createControls = () => {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;


}
// 7.渲染
const render = () => {
    controls.update();
    renderer.render(scene, camera);
    // controls.addEventListener('change', render);
    requestAnimationFrame(render)//均匀旋转
}


</script>

<style scoped lang="less">

#demo2 {
    width: 100%;
    height: 100%;
}

</style>