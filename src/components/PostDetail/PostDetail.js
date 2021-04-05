import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h3>This is post detail: {id} </h3>
      <p>user posted: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>post buddy: {post.body}</p>
      <p>Number of Comments: {comments.length}</p>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
};

export default PostDetail;
