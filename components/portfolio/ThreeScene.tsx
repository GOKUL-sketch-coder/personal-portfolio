"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lights
    const ambientLight = new THREE.AmbientLight(0x1a0533, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 3, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x3b82f6, 2, 20);
    pointLight2.position.set(-4, -2, 3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x06b6d4, 1.5, 15);
    pointLight3.position.set(0, -4, 2);
    scene.add(pointLight3);

    // Main abstract shape - Icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const icoMat = new THREE.MeshPhongMaterial({
      color: 0x0d0d1a,
      emissive: 0x1a0533,
      emissiveIntensity: 0.3,
      shininess: 100,
      specular: 0xa855f7,
      wireframe: false,
      transparent: true,
      opacity: 0.9,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.castShadow = true;
    scene.add(ico);

    // Wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.42, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.2
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    // Outer ring 1
    const ring1Geo = new THREE.TorusGeometry(2.2, 0.008, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 4;
    scene.add(ring1);

    // Outer ring 2
    const ring2Geo = new THREE.TorusGeometry(2.6, 0.006, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.35 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Floating dots (small spheres)
    const dotGroup = new THREE.Group();
    const dotPositions: [number, number, number][] = [
      [2.5, 1, 0.5], [-2.2, 0.8, -0.3], [1.2, -2.3, 0.8],
      [-1.8, -1.5, 1], [0.5, 2.8, -0.5], [-0.3, -2.8, 0.3],
      [2.8, -0.5, -0.8], [-2.5, 0.3, 0.7]
    ];
    const dotColors = [0xa855f7, 0x3b82f6, 0x06b6d4, 0x10b981, 0xf472b6, 0xa855f7, 0x3b82f6, 0x06b6d4];
    dotPositions.forEach((pos, i) => {
      const dGeo = new THREE.SphereGeometry(0.06, 8, 8);
      const dMat = new THREE.MeshBasicMaterial({ color: dotColors[i % dotColors.length] });
      const dot = new THREE.Mesh(dGeo, dMat);
      dot.position.set(...pos);
      dotGroup.add(dot);
    });
    scene.add(dotGroup);

    // Connection lines between dots
    const lineMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.15 });
    for (let i = 0; i < dotPositions.length - 1; i++) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(...dotPositions[i]),
        new THREE.Vector3(...dotPositions[(i + 2) % dotPositions.length])
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);
    }

    // Mouse tracking
    let mouseX = 0, mouseY = 0;
    let targetRotX = 0, targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / canvas.offsetWidth - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / canvas.offsetHeight - 0.5) * 2;
      targetRotY = mouseX * 0.5;
      targetRotX = mouseY * 0.3;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMove);

    let currentRotX = 0, currentRotY = 0;
    let time = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.008;

      // Smooth mouse follow
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      // Float animation
      const floatY = Math.sin(time) * 0.12;
      const floatX = Math.cos(time * 0.7) * 0.06;

      ico.rotation.x = currentRotX * 0.5 + time * 0.2;
      ico.rotation.y = currentRotY * 0.5 + time * 0.3;
      wire.rotation.x = ico.rotation.x;
      wire.rotation.y = ico.rotation.y;

      ico.position.y = floatY;
      ico.position.x = floatX;
      wire.position.y = floatY;
      wire.position.x = floatX;

      ring1.rotation.z = time * 0.15 + currentRotY * 0.3;
      ring2.rotation.z = -time * 0.1 + currentRotX * 0.2;
      ring1.rotation.x = Math.PI / 4 + Math.sin(time * 0.5) * 0.15;
      ring2.rotation.y = Math.PI / 4 + Math.cos(time * 0.4) * 0.1;

      dotGroup.rotation.y = time * 0.1 + currentRotY * 0.2;
      dotGroup.rotation.x = Math.sin(time * 0.3) * 0.1 + currentRotX * 0.1;

      // Pulsing lights
      pointLight1.intensity = 3 + Math.sin(time * 2) * 0.8;
      pointLight2.intensity = 2 + Math.cos(time * 1.5) * 0.6;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="hero-canvas" 
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '55%',
        height: '100%',
        zIndex: 1
      }}
    />
  );
}
