// Code goes here
$(document).on('ready', function(){
  
    var scene = new THREE.Scene();
    var aspect = window.innerWidth / window.innerHeight;
    var camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 10000);
    camera.position.z = 20;          

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor( 0x333333 );
    var clock = new THREE.Clock();
    var time = 0;
    var earthOrbitRadius = 100,
    earthOrbitAngle = 0
    earthOrbitSpeed = 0.5

    //Setting canvas size
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Append canvas element to DOM
    document.body.appendChild(renderer.domElement);

    var group = new THREE.Object3D();
    var sunGroup = new THREE.Object3D();

    var starGeometry  = new THREE.SphereGeometry(100, 32, 32)
    var starMaterial  = new THREE.MeshBasicMaterial()
    starMaterial.map   = THREE.ImageUtils.loadTexture('/images/galaxy_starfield.png')
    starMaterial.side  = THREE.BackSide
    var star  = new THREE.Mesh(starGeometry, starMaterial)
    scene.add(star);

    scene.add(group);
    scene.add(sunGroup);
 

    var sunGeometry = new THREE.SphereGeometry(1, 64, 64);
    var sunTexture = THREE.ImageUtils.loadTexture("/images/sunmap.jpg");    

    var sunMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFF99,
      ambient: 0xFFFF99,
      specular: 0x333333,
      shininess: 15,    
      map: sunTexture,  
      shading: THREE.SmoothShading
    });
    var sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sunGroup.add(sun);

    var ambientLight = new THREE.AmbientLight(0xFFFF99);
    scene.add(ambientLight);
    
    var light = new THREE.PointLight(0xFFFFFF, 1, 0);
    light.position.set(0, 0, 0);
    scene.add(light);


    //Getting the earth ready
    var geometry = new THREE.SphereGeometry(2, 64, 64);
    var texture = THREE.ImageUtils.loadTexture("/images/earth_atmos_2048.jpg");    
    var bumpTexture = THREE.ImageUtils.loadTexture('/images/earthbump1k.jpg');

    var material = new THREE.MeshPhongMaterial({
      color: 0xaaaaaa,
      ambient: 0xaaaaaa,
      specular: 0x333333,      
      map: texture,   
      bumpMap: bumpTexture,
      bumpScale: 0.2,   
      specularMap: THREE.ImageUtils.loadTexture('/images/earthspec1k.jpg'),
      specular : new THREE.Color('grey')      
    });

    var cloudMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.01, 64, 64),
      new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture('/images/earthcloudmap.jpg'),
        transparent: true,
        side: THREE.DoubleSide,
        opacity: 0.2,
      })
    );

    var earth = new THREE.Mesh(geometry, material);
    earth.rotation.z = 23.439281 * Math.PI / 180;        
    group.add(earth);    
    //group.add(cloudMesh);

    function render() {
      requestAnimationFrame(render);
      
      var delta = clock.getDelta();
      //group.rotation.x += 3.2 * delta;
      group.rotation.y += 1 * delta;
      
      var time = clock.getElapsedTime() * 0.5;
      group.position.x = Math.cos( time ) * 5;
      group.position.z = Math.sin( time ) * 5;

      renderer.render(scene, camera);
    }
    
    render();


    // --------

    function forward() {
      step++;
      if (step > 4) { step = 4; return; }
      applyStep(step);
    }

    function back() {
      step--;
      if (step <= 0) { step = 1; return; }
      applyStep(step);
    }

    // Controls for stand-alone
    window.addEventListener('keydown', function (e) {
      if (e.keyCode == 38 || e.keyCode == 37) back();
      if (e.keyCode == 40 || e.keyCode == 39) forward();
    });
  
});
