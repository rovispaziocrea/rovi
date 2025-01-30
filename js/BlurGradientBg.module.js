                }

                void main() {
                    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
                    vec2 tuv = vUv;
                    tuv *= u_scale;
                    tuv -= 0.5;

                    // rotate with Noise
                    float degree = noise(vec2(u_time*0.1, tuv.x*tuv.y));
                    tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));

                    // Wave warp with sin
                    float frequency = 5.0;
                    float amplitude = 130.0;
                    float speed = 2.0;
                    tuv.x += sin(tuv.y * frequency + speed) / amplitude;
                    tuv.y += sin(tuv.x * frequency * 1.5 + speed) / (amplitude * 0.5);

                    vec3 layer1 = mix(u_color_0, u_color_1, S(-0.3, 0.2, (tuv * Rot(radians(u_rand_1))).x));
                    vec3 layer2 = mix(u_color_2, u_color_3, S(-0.3, 0.2, (tuv * Rot(radians(u_rand_2))).x));
                    
                    vec3 finalComp = mix(layer1, layer2, S(0.5, -0.3, tuv.y));
                    
                    gl_FragColor = vec4(finalComp, 1.0);
                }
            `,
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new window.ogl.Vec2(this.canvasW * 2, this.canvasH * 2) },
                u_color_0: { value: new window.ogl.Color(this.palette[0]) },
                u_color_1: { value: new window.ogl.Color(this.palette[1]) },
                u_color_2: { value: new window.ogl.Color(this.palette[2]) },
                u_color_3: { value: new window.ogl.Color(this.palette[3]) },
                u_scale: { value: 1.3 },
                u_rand_1: { value: 0 },
                u_rand_2: { value: 0 }
            }
        });

        // Create plane for render target
        this.rttPlane = new window.ogl.Mesh(this.gl, {
            geometry: this.rttPlaneGeo,
            program: this.rttProgram
        });

        this.isRenderTarget = true;
    }

    _makeMaterial() {
        this._planeShader = new window.ogl.Program(this.gl, {
            vertex: `
                attribute vec3 position;
                attribute vec2 uv;
                uniform mat4 modelViewMatrix;
                uniform mat4 projectionMatrix;
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragment: `
                precision highp float;
                uniform sampler2D tMap;
                uniform float uNoiseFactor;
                uniform float uTime;

                float random(vec2 co) {
                    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
                }

                varying vec2 vUv;
                
                void main() {
                    vec4 color = texture2D(tMap, vUv);
                    float noise = (random(vUv) - 0.5) * uNoiseFactor;
                    color.rgb = color.rgb + color.rgb * noise;
                    gl_FragColor = color;
                }
            `,
            uniforms: {
                tMap: { value: this.rtt.texture },
                uNoiseFactor: { value: 0.1 },
                uTime: { value: 0 }
            }
        });
    }

    _make() {
        const geometry = new window.ogl.Plane(this.gl, {
            width: this.canvasW,
            height: this.canvasH
        });

        const mainPlane = new window.ogl.Mesh(this.gl, {
            geometry: geometry,
            program: this._planeShader
        });

        mainPlane.setParent(this.scene);
    }

    _resetSeed() {
        // Random rotation angles between -100 and 100 degrees
        this.rttProgram.uniforms.u_rand_1.value = this.rng() * 200 - 100;
        this.rttProgram.uniforms.u_rand_2.value = this.rng() * 200 - 100;
    }

    _resetColors() {
        if (this.rttProgram) {
            this.rttProgram.uniforms.u_color_0.value = new window.ogl.Color(this.palette[0]);
            this.rttProgram.uniforms.u_color_1.value = new window.ogl.Color(this.palette[1]);
            this.rttProgram.uniforms.u_color_2.value = new window.ogl.Color(this.palette[2]);
            this.rttProgram.uniforms.u_color_3.value = new window.ogl.Color(this.palette[3]);
        }
    }

    _animate() {
        if (this.rttProgram) {
            this.rttProgram.uniforms.u_time.value = Math.sin(this.frame / 200) * 10;
        }
    }

    _update() {
        requestAnimationFrame(this._update.bind(this));

        if (this.loop) {
            this.frame++;
            this._animate();
        }

        // Clear and render main scene
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });

        // Render to texture if needed
        if (this.isRenderTarget) {
            this.renderer.render({
                scene: this.rttPlane,
                camera: this.rttCamera,
                target: this.rtt
            });
        }
    }

    update(param, value) {
        if (param === 'noise') {
            this._planeShader.uniforms.uNoiseFactor.value = parseFloat(value);
        }
    }

    destroy() {
        window.removeEventListener('resize', this.resize.bind(this));
        this.container.removeChild(this.gl.canvas);
    }
}
