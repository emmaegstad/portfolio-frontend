// remove whitespace from glsl shaders
const glsl = (x) => x[0].trim();

export const fragmentShader = glsl`
    precision highp float;
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;

    void main() {
        float vmin = min(resolution.y, resolution.x);
        vec2 p = vUv * 1. - .25; // (gl_FragCoord.xy - .5 * resolution) / vmin;
        float r = .5 + .25 * (sin(5. * p.x + time));
        float g = .5 + .125 * (sin(5. * p.y) + sin(time + 2. * p.x));  
        float b = .5 + .25 * (sin(.2 + p.x * p.y * 17.) + sin(time * .4  + 4. * p.y));
        gl_FragColor = vec4(r, g, b, 1.);
    }
`;

export const vertexShader = glsl`
    varying vec2 vUv;
    
    void main()	{
        vUv = uv;
        gl_Position = vec4( position, 1.0 );
    }
`;
