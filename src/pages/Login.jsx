import { useState } from "react";
import ollaImg from "../assets/images/olla.jpg";
const API_URL = import.meta.env.VITE_API_URL || '';

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim() || !password.trim()) {
      setError("Por favor ingresa usuario y contraseña.");
      return;
    }

    try {
			setLoading(true);
      const response = await fetch(`${API_URL}/api/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

      const rawBody = await response.text();
      let data = {};

      if (rawBody) {
        try {
          data = JSON.parse(rawBody);
        } catch {
          data = { message: rawBody };
        }
      }

			if (!response.ok) {
				throw new Error(data.message || 'No se pudo iniciar sesión.');
			}

			setSuccess('Inicio de sesión exitoso.');
			onSubmit?.({ user: data.user, remember });
		} catch (requestError) {
			setError(requestError instanceof Error ? requestError.message : 'Error inesperado');
		} finally {
			setLoading(false);
		}
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Lado izquierdo: tarjeta informativa */}
        <div className="hidden md:flex flex-col items-center justify-center rounded-lg p-6">
          <h3 className="text-2xl font-bold text-emerald-800 mb-2">
            Bienvenid@s
          </h3>
          <img
            src={ollaImg}
            alt="Ilustración de bienvenida"
            className="w-full h-auto mb-4 rounded-full"
          />
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-emerald-800">
              Iniciar sesión
            </h3>
          </div>

          {error && <div className="mb-3 text-sm text-red-600">{error}</div>}
          {success && (
            <div className="mb-3 text-sm text-green-700">{success}</div>
          )}

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Usuario o correo
          </label>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14v7"
                />
              </svg>
            </span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="usuario@ejemplo.com"
              autoComplete="username"
            />
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <div className="relative mb-3">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11h14v10H5z"
                />
              </svg>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-300"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              Recuérdame
            </label>
            <button
              type="button"
              className="text-sm text-emerald-600 hover:underline"
            >
              ¿Olvidaste la contraseña?
            </button>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-medium transition"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Iniciando..." : "Entrar"}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <button type="button" className="text-emerald-600 hover:underline">
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
