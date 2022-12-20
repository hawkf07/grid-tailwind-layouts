import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Article } from "./components/Article";

function App() {
  const [data, setData] = useState<Article[] | null>([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Article[] = await response.json();
    data.length = 20;
    setData(data);
  };

  useEffect(() => {
    getData();
    document.title = "Pancake Layout";
  }, []);
  return (
    <div className="grid overflow-hidden grid-cols-holygrail grid-rows-holygrail h-screen min-h-screen container mx-auto gap-8">
      <Navbar />
      <aside className="bg-pink-700 rounded col-start-1 p-5 col-end-2 ">
        <header>
          <h1>Left Sidebar</h1>
        </header>
      </aside>
      <main className="overflow-scroll">
        <header>
          <h1 className="text-xl">Main Content</h1>
        </header>
        <div className="grid gap-8">
          {Array.isArray(data)
            ? data.map((data) => {
              return (
                <Article title={data.title} id={data.id} body={data.body} />
              );
            })
            : "There is no data"}
        </div>
      </main>
      <aside className="bg-teal-700 p-5">
        <header>
          <h1>Left Sidebar</h1>
        </header>
      </aside>
      <footer className="min-h-[5vh]">
        <header>
          <h1 className="text-2xl">Footer</h1>
        </header>
      </footer>
    </div>
  );
}

export default App;
