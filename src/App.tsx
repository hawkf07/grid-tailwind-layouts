import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.length = 20;
    setData(data);
  };

  useEffect(() => {
    getData();
    document.title = "Pancake Layout";
  }, []);
  return (
    <div className="grid grid-rows-pancake h-screen min-h-screen container mx-auto gap-8">
      <Navbar />
      <main className="grid grid-cols-ram gap-8 mx-3 place-items-center ">
        {Array.isArray(data)
          ? data.map((item) => {
            return (
              <article className="p-5 shadow dark:shadow-none dark:bg-gray-700/50 rounded min-w-[10rem] h-full">
                <header className="text-xl">
                  <h1>{item.title}</h1>
                </header>
                <section>
                  <p>{item.body}</p>
                  <p>{item.id}</p>
                </section>
              </article>
            );
          })
          : "data not found"}
      </main>
      <footer className=" p-5 grid grid-rows-pancake gap-8">
        <header>
          <h1 className="text-3xl">Footer</h1>
        </header>
        <section className="grid-cols-3 grid gap-5">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </section>
        <section>
          <p>Copyright Fikri Fadillah</p>
        </section>
      </footer>
    </div>
  );
}

export default App;
