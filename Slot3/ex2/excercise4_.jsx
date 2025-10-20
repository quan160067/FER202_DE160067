export function Exercise4_() {
  // 1️⃣ Hello React text
  const HelloReact = () => (
    <h1>
      Hello <span style={{ color: "blue" }}>React</span>
    </h1>
  );

  // 2️⃣ React Logo with caption
  const ReactLogo = () => (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        width="150"
      />
      <p style={{ fontStyle: "italic" }}>
        This is the React logo! <br />
        <span style={{ fontSize: "12px" }}>
          (It’s the famous whirl in three ellipses)
        </span>
      </p>
      <p>The library for web and native user interfaces</p>
    </div>
  );

  // 3️⃣ Navbar (Home, Search, Contact, Login)
  const Navbar = () => (
    <div
      style={{
        backgroundColor: "#555",
        padding: "10px",
        display: "flex",
        gap: "10px",
      }}
    >
      <button style={{ backgroundColor: "lightgreen", border: "none", padding: "5px 10px" }}>Home</button>
      <button style={{ border: "none", padding: "5px 10px" }}>Search</button>
      <button style={{ border: "none", padding: "5px 10px" }}>Contact</button>
      <button style={{ backgroundColor: "black", color: "white", border: "none", padding: "5px 10px" }}>
        Login
      </button>
    </div>
  );

  // 4️⃣ Display JSX text
  const JSXtext = () => (
    <h1 style={{ color: "blue" }}>This is JSX</h1>
  );

  // 5️⃣ List of courses
  const CourseList = () => {
    const courses = ["React", "ReactNative", "NodeJs"];
    return (
      <div>
        <h2>Course names</h2>
        <ul>
          {courses.map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <h2>Exercise 4: JSX and ES6</h2>
      <HelloReact />
      <ReactLogo />
      <Navbar />
      <JSXtext />
      <CourseList />
    </>
  );
}
