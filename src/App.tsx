import "./styles.css";

const LoadingText = () => {
  const isLoading = false;
  return <div>{isLoading ? <p>Loading...</p> : <h2>Fertig geladen</h2>}</div>;
};

export default function App() {
  const isLoading = false;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Time now: {new Date().toISOString()}</h2>

      <LoadingText />
    </div>
  );
}
