import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from "../store/slice/blogSlice";

export default function BlogList() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blog.blogList);

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  function onDeleteBlog(getCurrentBlogId) {
    console.log(getCurrentBlogId);
    dispatch(
      handleDeleteBlog({
        currentBlogId: getCurrentBlogId,
      })
    );
  }

  function onEditBlog(getCurrentBlog) {
    dispatch(
      setCurrentEditedBlogId({
        currentBlogId: getCurrentBlog?.id,
      })
    );

    dispatch(
      handleInputChange({
        title: getCurrentBlog?.title,
        description: getCurrentBlog?.description,
      })
    );
  }
  return (
    <div>
      <ul>
        {blogList?.length > 0 ? (
          blogList.map((singleBlogItem) => (
            <div
              style={{ border: "1px solid red", padding: "10px" }}
              key={singleBlogItem?.id}
            >
              <h3>{singleBlogItem?.title}</h3>
              <h3>{singleBlogItem?.description}</h3>
              <button onClick={() => onEditBlog(singleBlogItem)}>
                Edit Blog
              </button>
              <button onClick={() => onDeleteBlog(singleBlogItem.id)}>
                Delete Blog
              </button>
            </div>
          ))
        ) : (
          <h1>No blog added ! Please add one</h1>
        )}
      </ul>
    </div>
  );
}
