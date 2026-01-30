// WRADS Agency - Main JavaScript
// 3D Globe Animation & Interactive Features

// ============================================
// HEADER SCROLL EFFECT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('svg');
            if (mobileMenu.classList.contains('open')) {
                mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });
    }

    // Initialize 3D Globe if container exists
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer && typeof THREE !== 'undefined') {
        initGlobe();
    }
});

// ============================================
// 3D GLOBE ANIMATION (Three.js)
// ============================================
function initGlobe() {
    const container = document.getElementById('globe-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Earth sphere
    const geometry = new THREE.SphereGeometry(100, 64, 64);
    
    // Load Earth texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    
    const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        transparent: true,
        opacity: 0.9
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(102, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xC0C0C0,
        transparent: true,
        opacity: 0.1,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Connection points (India, USA, UK, Dubai)
    const points = [
        { lat: 20.5937, lng: 78.9629, name: 'India', color: 0xB30000 },
        { lat: 37.0902, lng: -95.7129, name: 'USA', color: 0xCC1A1A },
        { lat: 55.3781, lng: -3.4360, name: 'UK', color: 0xB30000 },
        { lat: 25.2048, lng: 55.2708, name: 'Dubai', color: 0xCC1A1A }
    ];

    // Add point markers
    points.forEach(point => {
        const pointGeometry = new THREE.SphereGeometry(2, 16, 16);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: point.color });
        const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
        
        const phi = (90 - point.lat) * (Math.PI / 180);
        const theta = (point.lng + 180) * (Math.PI / 180);
        
        pointMesh.position.x = -(102) * Math.sin(phi) * Math.cos(theta);
        pointMesh.position.z = (102) * Math.sin(phi) * Math.sin(theta);
        pointMesh.position.y = (102) * Math.cos(phi);
        
        scene.add(pointMesh);
    });

    // Create connection arcs
    function createArc(start, end, color) {
        const startPhi = (90 - start.lat) * (Math.PI / 180);
        const startTheta = (start.lng + 180) * (Math.PI / 180);
        const endPhi = (90 - end.lat) * (Math.PI / 180);
        const endTheta = (end.lng + 180) * (Math.PI / 180);

        const startVec = new THREE.Vector3(
            -(100) * Math.sin(startPhi) * Math.cos(startTheta),
            (100) * Math.cos(startPhi),
            (100) * Math.sin(startPhi) * Math.sin(startTheta)
        );

        const endVec = new THREE.Vector3(
            -(100) * Math.sin(endPhi) * Math.cos(endTheta),
            (100) * Math.cos(endPhi),
            (100) * Math.sin(endPhi) * Math.sin(endTheta)
        );

        const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
        midPoint.normalize().multiplyScalar(150);

        const curve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
        const curvePoints = curve.getPoints(50);
        const curveGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const curveMaterial = new THREE.LineBasicMaterial({ color: color, transparent: true, opacity: 0.6 });
        
        return new THREE.Line(curveGeometry, curveMaterial);
    }

    // Add arcs from India to other locations
    const india = points[0];
    for (let i = 1; i < points.length; i++) {
        const arc = createArc(india, points[i], 0xB30000);
        scene.add(arc);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.002;
        atmosphere.rotation.y += 0.002;
        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ============================================
// CARD HOVER EFFECTS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Sector cards
    document.querySelectorAll('.sector-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 50px rgba(179, 0, 0, 0.08)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
        });
    });

    // BOREAL cards
    document.querySelectorAll('.boreal-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 40px rgba(179, 0, 0, 0.08)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Tech cards
    document.querySelectorAll('.tech-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 40px rgba(179, 0, 0, 0.08)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
        });
    });

    // Footer social links
    document.querySelectorAll('.footer-social a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--accent-crimson)';
            this.style.borderColor = 'var(--accent-crimson)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = 'var(--text-muted)';
            this.style.borderColor = 'rgba(0,0,0,0.08)';
        });
    });
});
