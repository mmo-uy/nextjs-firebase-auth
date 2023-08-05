import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Firebase Auth example</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "12em",
          background: "#3dd6a7",
        }}
      >
        <Link style={{ padding: "10px", color: "black" }} href="/auth/login">
          Login
        </Link>
        <Link style={{ padding: "10px", color: "black" }} href="/auth/register">
          Register
        </Link>
      </div>
    </>
  );
}
