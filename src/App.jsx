import NavbarSitio from "./components/layout/NavbarSitio";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarSitio />
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-5xl font-extrabold text-gray-900">
          CROWN <span className="text-yellow-500">EDITION</span> 👑
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Probando.
        </p>
      </div>
    </div>
  );
}

export default App;
