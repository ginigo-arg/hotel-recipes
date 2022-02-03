import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
  const { handleChange, handleSubmit, user, formValues } = useLogin();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group text-white">
          <label className="text-white">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="text-light">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-end my-3">
          <button
            type="submit"
            className="btn btn-light"
            disabled={user.loading}
          >
            Enviar
          </button>
        </div>
      </form>
      {user.data.error && (
        <div className="alert alert-danger mt-3 text-center" role="alert">
          <span>User or Password incorrect</span>
        </div>
      )}
    </>
  );
}
