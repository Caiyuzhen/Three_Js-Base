import React, {useEffect, useRef} from 'react'
import * as THREE from 'three'


function ExampleA() : JSX.Element {

	//ð¥DOM æè½½ç¹
	const threeRef = useRef<HTMLDivElement>(null)

	//â¶ï¸åå§å
	function init(){
		//ð  å»ºç«åºæ¯
		const scene = new THREE.Scene()

		//âï¸ å»ºç«ãåæ ç³»ã
		const axes = new THREE.AxesHelper(20)

		//âï¸ æãåæ ç³»ãæ·»å å°åºæ¯å
		scene.add(axes)





		//â½ï¸ å»ºç«ãå¹³é¢å ä½ä½ãå¹¶è®¾ç½®ãå¹³é¢å ä½ä½ãçãå®½åº¦ãåãé«åº¦ãç­åæ°
		const planeGeometry = new THREE.PlaneGeometry(60, 20)//new ä¸ä¸ªå ä½ä½
		const planeMaterial = new THREE.MeshBasicMaterial({	//æ·»å æè´¨
			color: '#9797a0',
		})

 		//æãå ä½ä½çé¿å®½ãåãæè´¨ãç»åæä¸ä¸ªæ¨¡å
		const plane = new THREE.Mesh(planeGeometry, planeMaterial)

		plane.rotation.x = -0.5 * Math.PI;
		plane.position.x = 15;
		plane.position.y = 0;
		plane.position.z = 0;

		//â½ï¸ æãå¹³é¢å ä½ä½ãæ·»å å°åºæ¯å
		scene.add(plane);






		//ð² å»ºç«ç«æ¹ä½
		const CubeGeometry = new THREE.BoxGeometry(4, 4, 4)//new ä¸ä¸ªå ä½ä½
		const CubeMaterial = new THREE.MeshBasicMaterial({//æ·»å æè´¨
			color: '#26215e',
			wireframe: true,//å¼å¯éè§ç½æ ¼
		})

		//æãå ä½ä½çé¿å®½ãåãæè´¨ãç»åæä¸ä¸ªæ¨¡å
		const cube = new THREE.Mesh(CubeGeometry, CubeMaterial)//æãå ä½ä½çé¿å®½ãåãæè´¨ãç»åæä¸ä¸ªæ¨¡å

		cube.position.x = 4
		cube.position.y = 2
		cube.position.z = 2

		//ð² æãç«æ¹ä½ãæ·»å å°åºæ¯å
		scene.add(cube)





		//âªï¸ å»ºç«çä½
		const sphereGeom = new THREE.SphereGeometry(4, 20, 20)//new ä¸ä¸ªçä½
		const sphereMaterial = new THREE.MeshBasicMaterial({
			color: '#3370FF',
		})

		const sphere = new THREE.Mesh(sphereGeom, sphereMaterial)
		sphere.position.x = 24
		sphere.position.y = 4
		sphere.position.z = 2

		scene.add(sphere)






		//å»ºç«æ¸²æå¨ç renderer æè½½ç¹,å¹¶è®¾ç½®æ¸²æå¨çå°ºå¯¸
		const renderer = new THREE.WebGLRenderer()
		renderer.setClearColor(new THREE.Color(0xeeeeee))//è®¾ç½®é¢è²
		renderer.setSize(window.innerWidth, window.innerHeight)//è®¾ç½®åºæ¯å®½é«

		//å»ºç«ç¸æº 
		const camera = new THREE.PerspectiveCamera(
			45, //è§åº¦
			window.innerWidth / window.innerHeight, //é¿å®½æ¯
			0.1, //æè¿ç¹
			1000, //æè¿æ¶å¤±ç¹
		)

		//æç¸æºæ·»å å°åºæ¯å(æç¸æºæ¾å°åªéï¼æ¨¡æäººç¼è§å¯è§åº¦)
		camera.position.x = -30
		camera.position.y = 20
		camera.position.z = 30
		camera.lookAt(scene.position)
		if(threeRef.current){//å¦æææè½½ç¹
			threeRef.current.appendChild(renderer.domElement)//æãæ¸²æå¨ãç dom åç´ æ·»å å°ãæè½½ç¹ renderer ãå
			renderer.render(scene, camera)//ð·ç»åºæ¯æ·»å ç¸æº
		}
	}

	// ðæ§è¡å½æ°
	useEffect(()=>{
		init() //è°ç¨åå§åçå½æ°
	},[])


	return (
		<div ref={threeRef}>

		</div>
	)
}

export default ExampleA