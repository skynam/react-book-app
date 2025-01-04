import PageRoute from "./routes/PageRoute";
import { AppContextProvider } from "./contexts/AppContext"


function App() {
  return (
    <AppContextProvider>
      <PageRoute />
    </AppContextProvider>
  );
}

export default App;
