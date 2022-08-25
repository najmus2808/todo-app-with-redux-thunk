import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 min-h-screen px-6 font-sans">
        <Navbar />

        <div
          className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white mt-4"
          style={{ marginTop: "5rem" }}
        >
          <Header />

          <hr className="mt-4" />

          <h2>Incomplete task</h2>

          <TodoList isComplete={false} />

          <hr className="mt-4" />

          <Footer />
        </div>

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white alert mt-4">
          <h2>Complete task</h2>
          <TodoList isComplete={true} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
