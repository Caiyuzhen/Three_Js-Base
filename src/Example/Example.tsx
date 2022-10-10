import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'


function ExampleA() : JSX.Element {

	//🔥DOM 挂载点
	const threeRef = useRef<HTMLDivElement>(null)

	//▶️初始化
	function init(){
		//🏠 建立场景
		const scene = new THREE.Scene()

		//✈️ 建立【坐标系】
		const axes = new THREE.AxesHelper(20)

		//✈️ 把【坐标系】添加到场景内
		scene.add(axes)





		//⚽️ 建立【平面几何体】并设置【平面几何体】的【宽度】和【高度】等参数
		const planeGeometry = new THREE.PlaneGeometry(60, 20)//new 一个几何体
		const planeMaterial = new THREE.MeshBasicMaterial({	//添加材质
			color: '#9797a0',
		})

 		//把【几何体的长宽】和【材质】组合成一个模型
		const plane = new THREE.Mesh(planeGeometry, planeMaterial)

		plane.rotation.x = -0.5 * Math.PI;
		plane.position.x = 15;
		plane.position.y = 0;
		plane.position.z = 0;

		//⚽️ 把【平面几何体】添加到场景内
		scene.add(plane);






		//🔲 建立立方体
		const CubeGeometry = new THREE.BoxGeometry(4, 4, 4)//new 一个几何体
		const CubeMaterial = new THREE.MeshBasicMaterial({//添加材质
			color: '#26215e',
			wireframe: true,//开启透视网格
		})

		//把【几何体的长宽】和【材质】组合成一个模型
		const cube = new THREE.Mesh(CubeGeometry, CubeMaterial)//把【几何体的长宽】和【材质】组合成一个模型

		cube.position.x = 4
		cube.position.y = 2
		cube.position.z = 2

		//🔲 把【立方体】添加到场景内
		scene.add(cube)





		//⚪️ 建立球体
		const sphereGeom = new THREE.SphereGeometry(4, 20, 20)//new 一个球体
		const sphereMaterial = new THREE.MeshBasicMaterial({
			color: '#3370FF',
		})

		const sphere = new THREE.Mesh(sphereGeom, sphereMaterial)
		sphere.position.x = 24
		sphere.position.y = 4
		sphere.position.z = 2

		scene.add(sphere)






		//建立渲染器的 renderer 挂载点,并设置渲染器的尺寸
		const renderer = new THREE.WebGLRenderer()
		renderer.setClearColor(new THREE.Color(0xeeeeee))//设置颜色
		renderer.setSize(window.innerWidth, window.innerHeight)//设置场景宽高

		//建立相机 
		const camera = new THREE.PerspectiveCamera(
			45, //角度
			window.innerWidth / window.innerHeight, //长宽比
			0.1, //最近点
			1000, //最远消失点
		)

		//把相机添加到场景内(把相机放到哪里，模拟人眼观察角度)
		camera.position.x = -30
		camera.position.y = 20
		camera.position.z = 30
		camera.lookAt(scene.position)
		if(threeRef.current){//如果有挂载点
			threeRef.current.appendChild(renderer.domElement)//把【渲染器】的 dom 元素添加到【挂载点 renderer 】内
			renderer.render(scene, camera)//📷给场景添加相机
		}
	}

	// 🌈执行函数
	useEffect(()=>{
		init() //调用初始化的函数
	},[])


	return (
		<div ref={threeRef}>

		</div>
	)
}

export default ExampleA