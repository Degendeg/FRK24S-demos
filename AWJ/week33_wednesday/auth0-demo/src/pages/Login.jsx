import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Välkommen 👋</h1>
        <p className="text-sm text-gray-600 mb-6">
          Detta är en demoapplikation som använder <strong>Auth0:s React SDK</strong> för autentisering.
          Inloggningen hanteras via <code>@auth0/auth0-react</code>, och inställningar (t.ex. domän, client ID, callback-URL) är konfigurerade i Auth0 dashboarden.
          Applikationen använder <strong>Single Page Application</strong>-modellen, och du blir redirectad till <code>/profile</code> efter inloggning.
        </p>
        <button onClick={() => loginWithRedirect()} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl w-full cursor-pointer">
          Logga in med Auth0
        </button>
        <p className="text-xs text-gray-400 mt-4 text-center">
          Auth0 är en extern identitetsleverantör. Du kan använda SSO (Google/GitHub) eller e-post/lösenord beroende på vad som är aktiverat i dashboarden.
        </p>
      </div>
    </div>
  )
}
export default Login