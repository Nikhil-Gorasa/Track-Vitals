import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Debug logging
    console.log('ParticleBackground mounted');
    console.log('THREE.js version:', THREE.REVISION);
    
    if (!containerRef.current) {
      console.error('Container ref is null');
      return;
    }

    try {
      // Scene setup
      const scene = new THREE.Scene();
      console.log('Scene created');

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      console.log('Camera created with aspect ratio:', window.innerWidth / window.innerHeight);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });

      // Check if WebGL is available
      if (!renderer) {
        console.error('WebGL not supported');
        return;
      }
      console.log('Renderer created');
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);
      console.log('Renderer added to DOM');

      // Create particles with more spread
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 3000; // Reduced count for larger particles
      const posArray = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 40; // Adjusted spread
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02, // Increased size
        sizeAttenuation: true,
        color: 0x4F46E5,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      
      camera.position.z = 25; // Adjusted camera position for better view

      const mouse = {
        x: 0,
        y: 0
      };

      const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      document.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        requestAnimationFrame(animate);

        particlesMesh.rotation.x += 0.0002; // Slightly faster rotation
        particlesMesh.rotation.y += 0.0003;

        particlesMesh.position.x += (mouse.x * 0.5 - particlesMesh.position.x) * 0.05;
        particlesMesh.position.y += (mouse.y * 0.5 - particlesMesh.position.y) * 0.05;

        renderer.render(scene, camera);
      };

      console.log('Starting animation loop');
      animate();

      // Handle resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        console.log('Window resized:', width, height);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        console.log('Cleaning up ParticleBackground');
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
        scene.remove(particlesMesh);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error('Error in ParticleBackground:', error);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #000000, #111827)'
      }}
    >
    </div>
  );
};

export default ParticleBackground; 