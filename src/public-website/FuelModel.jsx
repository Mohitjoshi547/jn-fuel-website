
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";

function FuelDrum() {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group>
        {/* Drum body */}
        <mesh castShadow>
          <cylinderGeometry args={[0.8, 0.8, 2, 64]} />
          <meshStandardMaterial
            color="#e87924"
            metalness={0.65}
            roughness={0.25}
          />
        </mesh>

        {/* Top lid */}
        <mesh position={[0, 1.02, 0]}>
          <cylinderGeometry args={[0.81, 0.81, 0.12, 64]} />
          <meshStandardMaterial
            color="#252b36"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Bottom lid */}
        <mesh position={[0, -1.02, 0]}>
          <cylinderGeometry args={[0.81, 0.81, 0.12, 64]} />
          <meshStandardMaterial
            color="#252b36"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Drum rings */}
        {[-0.6, 0, 0.6].map((y) => (
          <mesh key={y} position={[0, y, 0]}>
            <torusGeometry args={[0.81, 0.045, 12, 64]} />
            <meshStandardMaterial color="#343b48" metalness={0.8} />
          </mesh>
        ))}

        {/* Front product label */}
        <mesh position={[0, 0, 0.805]}>
          <boxGeometry args={[1.05, 0.65, 0.035]} />
          <meshStandardMaterial color="#101827" roughness={0.4} />
        </mesh>

        {/* Label emblem */}
        <mesh position={[0, 0.08, 0.83]}>
          <circleGeometry args={[0.17, 48]} />
          <meshStandardMaterial
            color="#ffad42"
            emissive="#ff7b18"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Label stripe */}
        <mesh position={[0, -0.18, 0.833]}>
          <boxGeometry args={[0.7, 0.045, 0.02]} />
          <meshStandardMaterial color="#f8f8f8" />
        </mesh>
      </group>
    </Float>
  );
}

export default function FuelModel() {
  return (
    <div className="fuel-canvas">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }}>
        <ambientLight intensity={1.3} />

        <spotLight
          position={[4, 5, 5]}
          intensity={2.5}
          angle={0.5}
          penumbra={1}
        />

        <pointLight
          position={[-4, 1, -2]}
          intensity={2}
          color="#ff8a24"
        />

        <FuelDrum />

        <Environment preset="city" />

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={7}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}