import { useDispatch, useSelector } from "react-redux";
import {
  handleAddTodo,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from "../store/slice/blogSlice";

function AddNewBlog() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.blog.formData); // ✅ specific
  const currentEditedBlogId = useSelector((state) => state.blog.currentEditedBlogId);

  function onChangeInput(event) {
    dispatch(
      handleInputChange({
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleTodoSubmit(event) {
    event.preventDefault();
    if (currentEditedBlogId !== null) dispatch(handleEditBlog());
    else dispatch(handleAddTodo());

    if (currentEditedBlogId !== null) {
      dispatch(setCurrentEditedBlogId({ currentBlogId: null }));
    }
    dispatch(
      handleInputChange({
        description: "",
        title: "",
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <div>
          <label>Enter Blog Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            onChange={onChangeInput}
            value={formData?.title}
          />
        </div>
        <div>
          <label>Enter Blog Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Blog Description"
            id="description"
            onChange={onChangeInput}
            value={formData?.description}
          />
        </div>
        <button type="submit">
          {currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
}

export default AddNewBlog;
