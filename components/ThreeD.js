import React, { Component } from 'react';
import * as THREE from 'three';

export default class ThreeD extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const textureSquares = new THREE.TextureLoader().load(
      '/static/3d/bright_squares256.png'
    );
    textureSquares.repeat.set(50, 50);
    textureSquares.wrapS = textureSquares.wrapT = THREE.RepeatWrapping;
    textureSquares.magFilter = THREE.NearestFilter;
    textureSquares.format = THREE.RGBFormat;

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.z = 3;
    scene.add(directionalLight);

    let material = new THREE.MeshStandardMaterial({
      roughness: 0.7,
      metalness: 0.3,
      color: 0xaaaaaa,
      map: textureSquares
    });

    const loader = new THREE.JSONLoader();
    loader.load('/static/3d/jv-squad.json', geometry => {
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      this.mesh = mesh;
      this.start();
    });

    camera.position.z = 4;
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;

    this.mount.appendChild(this.renderer.domElement);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.mesh.rotation.y -= 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{
          width: this.props.width,
          height: this.props.height,
          margin: 'auto'
        }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
