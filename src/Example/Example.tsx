import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'


function ExamplA() {

	//🔥挂载点
	const threeRef = useRef<HTMLDivElement>(null)

	//▶️初始化
	function init(){
		//建立场景
		const scene = new THREE.Scene()

		//展示坐标系
		const axes = new THREE.AxesHelper(20)

		//把坐标系添加到场景内
		scene.add(axes)

		//渲染器
		const renderer = new THREE.WebGLRenderer()
		renderer.setClearColor(new THREE.Color(0x000000))//设置颜色
		renderer.setSize(window.innerWidth, window.innerHeight)//设置场景宽高

		//建立相机 
		const camera = new THREE.PerspectiveCamera(
			45, //角度
			window.innerWidth / window.innerHeight, //长宽比
			0.1, //最近点
			1000, //最远消失点
		)

		//把相机添加到场景内(把相机放到哪里)
		camera.position.x = -30
		camera.position.x = 40
		camera.position.x = 30
		camera.lookAt(scene.position)

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

export default ExamplA