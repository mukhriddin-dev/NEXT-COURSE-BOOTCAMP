"use client";
import {useState, useEffect} from "react";
import usePostsApi from "@/service/posts";
import Link from "next/link";

const Page = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        usePostsApi.getAll().then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <>
            <div className="p-4 bg-green-300 mx-auto container">
                <h1>POSTS</h1>

                <ul>
                    {posts.map((item) => {
                        return (
                            <li key={item.id} className="border p-5 bg-white my-4">
                              <Link href={`/posts/${item.id}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Page;
