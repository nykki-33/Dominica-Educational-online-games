import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function MiniCar() {
  return (
    <group>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[1.4, 0.45, 2.6]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      <mesh position={[0, 0.75, -0.1]}>
        <boxGeometry args={[1, 0.35, 1.2]} />
        <meshStandardMaterial color="#fca5a5" />
      </mesh>

      {[
        [-0.65, 0.1, 0.9],
        [0.65, 0.1, 0.9],
        [-0.65, 0.1, -0.9],
        [0.65, 0.1, -0.9],
      ].map((wheel, i) => (
        <mesh key={i} position={wheel} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.22, 0.22, 0.18, 18]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
      ))}
    </group>
  );
}

function MiniPalm({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.08, 0.14, 2.4, 8]} />
        <meshStandardMaterial color="#7c4a21" />
      </mesh>
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.6, 10, 10]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
    </group>
  );
}

function MiniDriveScene() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#34d399" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[6, 24]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, i * 3 - 8]}>
          <planeGeometry args={[0.35, 1.4]} />
          <meshStandardMaterial color="#fde047" />
        </mesh>
      ))}

      <MiniPalm position={[-4, 0, -5]} />
      <MiniPalm position={[4, 0, -4]} />
      <MiniPalm position={[-4, 0, 4]} />
      <MiniPalm position={[4, 0, 5]} />

      <MiniCar />
      <OrbitControls enablePan={false} />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  const [score, setScore] = useState(0);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setPulse((prev) => !prev), 1200);
    return () => clearInterval(timer);
  }, []);

  const getBackground = () => ({
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat fixed",
  });

  return (
    <div style={getBackground()}>
      <div
        style={{
          background: pulse
            ? "linear-gradient(90deg, rgba(34,197,94,0.92), rgba(59,130,246,0.92))"
            : "linear-gradient(90deg, rgba(59,130,246,0.92), rgba(34,197,94,0.92))",
          color: "white",
          padding: "10px 18px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        🛡️ Protected by strong firewall, admin controls, and secure student access
      </div>

      <div style={{ padding: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
        {["Home", "Drive Dominica", "Math Mountain", "Word Jungle", "Cyber Safety"].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              background: page === item ? "linear-gradient(90deg, #f97316, #eab308)" : "white",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: 30 }}>
        {page === "Home" && (
          <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: 48 }}>🌴 Dominica Learning Adventure</h1>
            <p style={{ fontSize: 20, lineHeight: 1.7 }}>
              Explore Dominica, learn with fun games, and enjoy a bright student-friendly tutoring world.
            </p>
          </div>
        )}

        {page === "Drive Dominica" && (
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1>🚗 Drive Dominica</h1>
            <p>Explore places like Red Rocks, Freshwater Lake, and Cold Soufriere.</p>

            <div
              style={{
                marginTop: 24,
                height: 420,
                borderRadius: 30,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 24px 40px rgba(0,0,0,0.35)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <Canvas camera={{ position: [0, 6, 10], fov: 50 }}>
                <MiniDriveScene />
              </Canvas>
            </div>
          </div>
        )}

        {page === "Math Mountain" && (
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h1>🧮 Math Mountain</h1>
            <p>Bright fun math games with levels, streaks, and challenges.</p>
            <div
              style={{
                marginTop: 24,
                background: "rgba(255,255,255,0.14)",
                borderRadius: 24,
                padding: 24,
              }}
            >
              <h2>Quick Challenge</h2>
              <p>What is 8 × 6?</p>
              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={() => setScore(score + 1)}
                  style={{
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "none",
                    background: "#22c55e",
                    color: "white",
                  }}
                >
                  48
                </button>
                <button
                  style={{
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: "none",
                    background: "#ef4444",
                    color: "white",
                  }}
                >
                  36
                </button>
              </div>
              <p style={{ marginTop: 12 }}>Score: {score}</p>
            </div>
          </div>
        )}

        {page === "Word Jungle" && (
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h1>📖 Word Jungle</h1>
            <p>Vocabulary, grammar, and story writing adventures.</p>
            <div
              style={{
                marginTop: 24,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 24,
                padding: 24,
              }}
            >
              <h2>✍️ Narrative Writing Adventure</h2>
              <ul style={{ lineHeight: 1.9 }}>
                <li>A magical adventure in the rainforest of Dominica</li>
                <li>Driving through Dominica and discovering a hidden waterfall</li>
                <li>A mysterious creature found near Red Rocks in Calibishie</li>
                <li>A school trip to Freshwater Lake that turned into an adventure</li>
              </ul>
            </div>
          </div>
        )}

        {page === "Cyber Safety" && (
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <h1>🛡 Cyber Safety</h1>
            <p>Learn safe passwords, smart clicking, and how to stay safe online.</p>
            <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
              {[
                "Never share your password.",
                "Do not tell strangers your address or school.",
                "Ask an adult before clicking suspicious links.",
                "Report bullying and unsafe messages quickly.",
              ].map((tip) => (
                <div
                  key={tip}
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    borderRadius: 24,
                    padding: 20,
                  }}
                >
                  🛡️ {tip}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
