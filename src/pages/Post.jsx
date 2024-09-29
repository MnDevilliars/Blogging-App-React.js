import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/database";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userID === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };


  return post ? (
    <div className="py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-yellow-800">
      <Container>
        <div className="md:flex md:gap-10 md:w-2/3 md:mx-auto">
          <div className="w-full mb-4 relative rounded-xl p-2 border border-[#afdde5] shadow-[0_4px_15px_rgba(255,255,255,0.5)]">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl w-full object-cover md:h-80"
            />
          </div>

          <div className="w-full">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-white">{post.title}</h1>
            </div>

            <div className="w-full px-4 md:px-0 text-white text-center">
              {parse(post.content)}
            </div>

            {isAuthor && (
              <div className="flex justify-center items-center gap-5 mt-5">
                <Link to={`/edit-post/${post.$id}`}>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-28 hover:bg-green-700 transition border border-[#afdde5] shadow-[0_4px_15px_rgba(255,255,255,0.5)] duration-300">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg w-28 hover:bg-red-700 transition border border-[#afdde5] shadow-[0_4px_15px_rgba(255,255,255,0.3)] duration-300"
                  onClick={deletePost}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>

  ) : null;
}