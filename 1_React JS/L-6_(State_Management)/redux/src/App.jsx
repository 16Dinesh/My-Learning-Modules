import "./App.css";
import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";
import CounterBtn from "./counter-example/counter-button";
import CounterValue from "./counter-example/counter-value";

function App() {
  return (
    <>
      <h1>Blog List App</h1>
      <AddNewBlog />
      <BlogList />
      {/* <CounterBtn/>
      // <CounterValue/>  */}
    </>
  );
}

export default App;
