"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

function ParticleField({ count = 2000 }) {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 20 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ff00ff" size={0.05} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function CyberpunkBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1),transparent_70%)] z-0"></div>
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

