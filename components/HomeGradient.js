import styles from '../styles/gradient.module.css';
import { useRef, useMemo } from 'react';
import { useGlobal } from '../context/GlobalContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { fragmentShader, vertexShader } from '../utils/homeShaders';
import cn from 'classnames';

let frameCount = 0;
const animationSpeedMultiplier = 0.02;

function GradientPlane(props) {
    const mesh = useRef();

    // animate mesh every frame
    useFrame(() => {
        frameCount += animationSpeedMultiplier;
        mesh.current.material.uniforms.time.value = frameCount;
    });

    const customShader = useMemo(
        () => ({
            // this tells the material to keep an eye on the time
            uniforms: {
                time: { type: 'f' },
            },
            // pass custom shaders in
            fragmentShader,
            vertexShader,
        }),
        []
    );

    return (
        <mesh {...props} ref={mesh}>
            <planeBufferGeometry args={[2, 2]} />
            <shaderMaterial attach="material" {...customShader} />
        </mesh>
    );
}

export default function Gradient() {
    const { activeGif } = useGlobal();

    return (
        <div
            className={cn({
                [styles.gradient]: true,
                [styles.gradientGif]: activeGif,
            })}
        >
            <Canvas>
                <GradientPlane position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
