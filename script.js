// ===========================
// MENU MOBILE
// ===========================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// MODELOS 3D COM THREE.JS
// ===========================

const viewers = {};

function createCube(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf8f9fa, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Criar cubo
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xffc107,
        shininess: 100
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Iluminação
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 2;

    // Controles de mouse
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            cube.rotation.y += deltaX * 0.005;
            cube.rotation.x += deltaY * 0.005;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Toque móvel
    let touchStartX = 0;
    let touchStartY = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    container.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        const deltaX = touchX - touchStartX;
        const deltaY = touchY - touchStartY;
        
        cube.rotation.y += deltaX * 0.005;
        cube.rotation.x += deltaY * 0.005;
        
        touchStartX = touchX;
        touchStartY = touchY;
    });

    // Animação contínua
    function animate() {
        requestAnimationFrame(animate);
        
        if (!isDragging) {
            cube.rotation.y += 0.002;
        }
        
        renderer.render(scene, camera);
    }
    animate();

    // Responsivo
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    return { scene, camera, renderer, cube };
}

function createPyramid(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf8f9fa, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Criar pirâmide
    const geometry = new THREE.TetrahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x707070,
        shininess: 100
    });
    const pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);

    // Iluminação
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 2.5;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            pyramid.rotation.y += deltaX * 0.005;
            pyramid.rotation.x += deltaY * 0.005;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    function animate() {
        requestAnimationFrame(animate);
        
        if (!isDragging) {
            pyramid.rotation.y += 0.002;
            pyramid.rotation.x += 0.001;
        }
        
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    return { scene, camera, renderer, pyramid };
}

function createSphere(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf8f9fa, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Criar esfera
    const geometry = new THREE.IcosahedronGeometry(1, 4);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xffc107,
        wireframe: false,
        shininess: 100
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Wireframe adicional
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.01, 4);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x707070,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Iluminação
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 2.5;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            sphere.rotation.y += deltaX * 0.005;
            sphere.rotation.x += deltaY * 0.005;
            wireframe.rotation.y = sphere.rotation.y;
            wireframe.rotation.x = sphere.rotation.x;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    function animate() {
        requestAnimationFrame(animate);
        
        if (!isDragging) {
            sphere.rotation.y += 0.002;
            wireframe.rotation.y += 0.002;
        }
        
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    return { scene, camera, renderer, sphere };
}

function createOctahedron(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf8f9fa, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Criar octaedro
    const geometry = new THREE.OctahedronGeometry(1, 2);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x1a1a1a,
        shininess: 100
    });
    const octahedron = new THREE.Mesh(geometry, material);
    scene.add(octahedron);

    // Iluminação
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    camera.position.z = 2.5;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            octahedron.rotation.y += deltaX * 0.005;
            octahedron.rotation.x += deltaY * 0.005;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    function animate() {
        requestAnimationFrame(animate);
        
        if (!isDragging) {
            octahedron.rotation.y += 0.002;
            octahedron.rotation.x += 0.001;
        }
        
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    return { scene, camera, renderer, octahedron };
}

function createObjModel(container, objPath, mtlPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0xf8f9fa, 1);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight1.position.set(4, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight2.position.set(-4, 5, -3);
    scene.add(dirLight2);

    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const group = new THREE.Group();
    scene.add(group);

    if (container.id === 'modalViewer') {
        camera.position.set(0, 0.45, 0.85);
    } else {
        camera.position.set(0, 0.65, 1.1);
    }
    camera.lookAt(new THREE.Vector3(0, 0.15, 0));

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;
    controls.enablePan = false;
    controls.minDistance = 0.6;
    controls.maxDistance = 2.5;
    controls.maxPolarAngle = Math.PI * 0.95;

    const controlsState = {
        isDragging: false,
        prevX: 0,
        prevY: 0,
        loaded: false
    };

    function loadOBJWithMaterials(materials) {
        const objLoader = new THREE.OBJLoader();
        if (materials) {
            objLoader.setMaterials(materials);
        }

        objLoader.load(objPath, (object) => {
            object.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Converter qualquer material em PBR para maior qualidade visual.
                    let baseColor = new THREE.Color(0xc0c0c0);
                    if (child.material && child.material.color) {
                        baseColor.copy(child.material.color);

                        if (baseColor.r > 0.4 && baseColor.g < 0.2 && baseColor.b < 0.2) {
                            baseColor.set(0xffc107); // vermelho -> amarelo
                        }
                    }

                    const newMat = new THREE.MeshStandardMaterial({
                        color: baseColor,
                        roughness: 0.32,
                        metalness: 0.07,
                        side: THREE.DoubleSide,
                        envMapIntensity: 1.0,
                        emissive: new THREE.Color(0x000000)
                    });

                    child.material = newMat;
                }
            });

            // Ajuste de escala e posição básica
            const box = new THREE.Box3().setFromObject(object);
            const size = box.getSize(new THREE.Vector3()).length();
            const center = box.getCenter(new THREE.Vector3());
            const scale = size > 0 ? 1.2 / size : 1;

            object.position.x += (object.position.x - center.x) * scale;
            object.position.y += (object.position.y - center.y) * scale;
            object.position.z += (object.position.z - center.z) * scale;
            object.scale.setScalar(scale);

            group.add(object);
            controlsState.loaded = true;
            const loadingElem = container.querySelector('.loading');
            if (loadingElem) loadingElem.style.display = 'none';
        }, undefined, (error) => {
            console.error('Erro carregando OBJ:', error);
            const loadingElem = container.querySelector('.loading');
            if (loadingElem) loadingElem.textContent = 'Falha ao carregar modelo 3D.';
        });
    }

    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.load(mtlPath, (materials) => {
        materials.preload();
        loadOBJWithMaterials(materials);
    }, undefined, (error) => {
        console.warn('Falha carregando MTL, carregando OBJ sem materiais:', error);
        const loadingElem = container.querySelector('.loading');
        if (loadingElem) {
            loadingElem.textContent = 'MTL não carregado; carregando com material padrão...';
        }
        loadOBJWithMaterials(null);
    });

    container.addEventListener('mousedown', (e) => {
        controlsState.isDragging = true;
        controlsState.prevX = e.clientX;
        controlsState.prevY = e.clientY;
    });

    container.addEventListener('mousemove', (e) => {
        if (!controlsState.isDragging || !controlsState.loaded) return;
        const deltaX = e.clientX - controlsState.prevX;
        const deltaY = e.clientY - controlsState.prevY;
        group.rotation.y += deltaX * 0.005;
        group.rotation.x += deltaY * 0.005;
        controlsState.prevX = e.clientX;
        controlsState.prevY = e.clientY;
    });

    ['mouseup', 'mouseleave'].forEach(eventName => {
        container.addEventListener(eventName, () => {
            controlsState.isDragging = false;
        });
    });

    container.addEventListener('touchstart', (e) => {
        controlsState.isDragging = true;
        controlsState.prevX = e.touches[0].clientX;
        controlsState.prevY = e.touches[0].clientY;
    });

    container.addEventListener('touchmove', (e) => {
        if (!controlsState.isDragging || !controlsState.loaded) return;
        const deltaX = e.touches[0].clientX - controlsState.prevX;
        const deltaY = e.touches[0].clientY - controlsState.prevY;
        group.rotation.y += deltaX * 0.005;
        group.rotation.x += deltaY * 0.005;
        controlsState.prevX = e.touches[0].clientX;
        controlsState.prevY = e.touches[0].clientY;
    });

    function animate() {
        requestAnimationFrame(animate);
        if (!controlsState.isDragging && controlsState.loaded) {
            group.rotation.y += 0.0015;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    return { scene, camera, renderer, group };
}

// Inicializar modelos 3D
document.addEventListener('DOMContentLoaded', () => {
    const v5 = document.getElementById('viewer5');
    if (v5) {
        viewers[5] = createObjModel(v5, 'assets/torre dupla/montagem_torre_dupla.obj', 'assets/torre dupla/montagem_torre_dupla.mtl');
    }

    const v6 = document.getElementById('viewer6');
    if (v6) {
        viewers[6] = createObjModel(v6, 'assets/olds/montagem.obj', 'assets/olds/montagem.mtl');
    }
});

function toggleViewer(id) {
    // Já está sendo exibido, apenas animamos
    console.log('Modelo ' + id + ' - Girando...');
}

const portfolioProjects = {
  1: {
    title: "Peça Mecânica Personalizada",
    category: "Modelagem 3D + Impressão",
    description:
      "Componente mecânico de alta precisão desenvolvido através de modelagem 3D e impressão em resina.",
    gallery: [
      "https://via.placeholder.com/400x300?text=Peça+1",
      "https://via.placeholder.com/400x300?text=Peça+2",
    ],
    details:
      "Projeto 1: escopo, processo de modelagem, impressão em resina com tolerância +/- 0.1mm.",
    modelId: 1,
    meta: {
      Cliente: "VCreate",
      Ano: "2026",
      Status: "Concluído",
      Ferramentas: "Fusion 360, Cura, Impressora SLA",
    },
  },
  2: {
    title: "Prototipagem de Produto",
    category: "Modelagem + Engenharia Reversa",
    description:
      "Protótipo funcional desenvolvido através de análise de conceito e modelagem paramétrica.",
    gallery: [
      "https://via.placeholder.com/400x300?text=Protótipo+1",
      "https://via.placeholder.com/400x300?text=Protótipo+2",
    ],
    details:
      "Projeto 2: digitalização, refinamento de geometria e iteração com cliente.",
    modelId: 2,
    meta: {
      Cliente: "Cliente X",
      Ano: "2025",
      Status: "Em produção",
      Ferramentas: "SolidWorks, 3D Scanner, FDM",
    },
  },
  3: {
    title: "Peça de Complexidade Alta",
    category: "Impressão 3D Avançada",
    description:
      "Componente de geometria complexa impresso em múltiplos materiais com acabamento profissional.",
    gallery: [
      "https://via.placeholder.com/400x300?text=Complexa+1",
      "https://via.placeholder.com/400x300?text=Complexa+2",
    ],
    details:
      "Projeto 3: engenharia de suporte, otimização de topologia e simulação de força.",
    modelId: 3,
    meta: {
      Cliente: "Indústria Y",
      Ano: "2024",
      Status: "Finalizado",
      Ferramentas: "Autodesk Meshmixer, Cura, SLA",
    },
  },
  4: {
    title: "Reconstrução de Peça Original",
    category: "Engenharia Reversa",
    description:
      "Análise completa e reconstrução digital de um componente para documentação e replicação.",
    gallery: [
      "https://via.placeholder.com/400x300?text=Reconstrução+1",
      "https://via.placeholder.com/400x300?text=Reconstrução+2",
    ],
    details:
      "Projeto 4: escaneamento 3D, retrofit para manufatura e relatório técnico.",
    modelId: 4,
    meta: {
      Cliente: "OEM Z",
      Ano: "2023",
      Status: "Entrega feita",
      Ferramentas: "Geomagic, Inventor, Impressora Multi-material",
    },
  },
  5: {
    title: "Torre Para Hidratação Triatlon",
    category: "Idealização, modelagem, renderização e impressão 3d",
    description:
      "Sistema de hidratação modular de alta performance para bicicletas de contrarrelógio (TT). Projetado para oferecer total liberdade de ajuste ergonômico e aerodinâmico através de uma arquitetura de componentes intercambiáveis e \"stackáveis\"\.",
    gallery: [
      "assets/torre dupla/montagem torre dupla - render.png",
      "assets/torre dupla/3d printed.jpeg",
    ],
    details: `Arquitetura Modular: Composto por plate universal e braços substituíveis (suporte duplo, simples ou personalizado).

Ajuste Angular Fino: Espaçadores configuráveis de -20º a +20º, com incrementos precisos de 5º em 5º.

Versatilidade de Montagem: Sistema permite o empilhamento (stacking) de espaçadores para ajuste de altura e angulação em qualquer sequência.

Manufatura Técnica: Desenvolvido com análise de tensões para garantir rigidez estrutural e leveza sob vibração constante.`,
    modelId: 5,
    objPath: "assets/torre dupla/montagem_torre_dupla.obj",
    mtlPath: "assets/torre dupla/montagem_torre_dupla.mtl",
    meta: {
      Cliente: "Manzatti Triathlon",
      Ano: "2026",
      Status: "Finalizado",
      Ferramentas: "Fusion, Creality scann, Orca slicer, Impressora FDM de alta precisão",
    },
  },
  6: {
    title: "Olds (Montagem Antiga)",
    category: "Modelo 3D Antigo",
    description:
      "Captura de modelo OBJ/MTL legado da pasta olds com visual retro.",
    gallery: [
      "assets/torre dupla/3d printed.jpeg",
      "assets/torre dupla/montagem torre dupla - render.png",
    ],
    details:
      "Projeto 6: modelo legacy da pasta olds com opção de comparar com torre dupla.",
    modelId: 6,
    objPath: "assets/olds/montagem.obj",
    mtlPath: "assets/olds/montagem.mtl",
    meta: {
      Cliente: "VCreate",
      Ano: "2025",
      Status: "Finalizado",
      Ferramentas: "Fusion 360, Three.js",
    },
  },
};

function openPortfolioDetails(id) {
    const project = portfolioProjects[id];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;

    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = '';
    project.gallery.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = project.title;
        gallery.appendChild(img);
    });

    const modalDetails = document.getElementById('modalDetails');
    modalDetails.textContent = project.details;

    const modalMeta = document.getElementById('modalMeta');
    modalMeta.innerHTML = '';
    if (project.meta) {
        Object.entries(project.meta).forEach(([key, value]) => {
            const item = document.createElement('div');
            item.innerHTML = `<span>${key}</span><strong>${value}</strong>`;
            modalMeta.appendChild(item);
        });
    }

    const modal = document.getElementById('portfolioModal');
    modal.className = '';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Carrega o modelo 3D no modal, re-usando caminhos do setup
    const modalViewer = document.getElementById('modalViewer');
    if (project.objPath && project.mtlPath) {
        createObjModel(modalViewer, project.objPath, project.mtlPath);
    } else if (project.modelId === 5) {
        createObjModel(modalViewer, 'assets/montagem_torre_dupla.obj', 'assets/montagem_torre_dupla.mtl');
    }
}

function closePortfolioDetails() {
    const modal = document.getElementById('portfolioModal');
    modal.className = 'modal-hidden';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ===========================
// FORM DE CONTATO
// ===========================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simular envio do formulário
    const button = contactForm.querySelector('button');
    const originalText = button.innerHTML;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
        button.style.background = '#22c55e';
        
        contactForm.reset();
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 2000);
    }, 1500);
});

// ===========================
// SCROLL ANIMATION
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// ===========================
// SUAVIZAR SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
