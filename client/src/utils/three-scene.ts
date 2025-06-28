declare global {
  interface Window {
    THREE: any;
  }
}

export const initializeThreeScene = (canvas: HTMLCanvasElement) => {
  if (!window.THREE) {
    console.error('Three.js not loaded');
    return;
  }

  const THREE = window.THREE;
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    canvas,
    alpha: true 
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Create floating geometric shapes
  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(0.7, 8, 6),
    new THREE.ConeGeometry(0.7, 1.5, 8),
    new THREE.OctahedronGeometry(0.8)
  ];

  const materials = [
    new THREE.MeshLambertMaterial({ color: 0x4F46E5, transparent: true, opacity: 0.8 }),
    new THREE.MeshLambertMaterial({ color: 0x7C3AED, transparent: true, opacity: 0.8 }),
    new THREE.MeshLambertMaterial({ color: 0x06B6D4, transparent: true, opacity: 0.8 }),
    new THREE.MeshLambertMaterial({ color: 0x3B82F6, transparent: true, opacity: 0.8 })
  ];

  const meshes: any[] = [];
  
  for (let i = 0; i < 20; i++) {
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = materials[Math.floor(Math.random() * materials.length)];
    const mesh = new THREE.Mesh(geometry, material);
    
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 20;
    mesh.position.z = (Math.random() - 0.5) * 20;
    
    mesh.rotation.x = Math.random() * 2 * Math.PI;
    mesh.rotation.y = Math.random() * 2 * Math.PI;
    
    meshes.push(mesh);
    scene.add(mesh);
  }

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  camera.position.z = 15;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    meshes.forEach((mesh, index) => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
    });
    
    renderer.render(scene, camera);
  }
  
  animate();

  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener('resize', handleResize);

  // Return cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    meshes.forEach(mesh => {
      scene.remove(mesh);
    });
    renderer.dispose();
  };
};
