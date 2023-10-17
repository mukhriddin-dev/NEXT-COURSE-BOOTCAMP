"use client";
import React, {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import usePostsApi from "@/service/posts";

const Page = ({params: {slug}}) => {
    const [state, setState] = useState(null);

    const router = useRouter();

    useEffect(() => {
        usePostsApi.getOneById(slug).then((res) => {
            setState(res.data);
        });

        console.log(router);
    }, [slug]);

    return (
        <div className="border p-5 bg-blue-200">
            <div className="flex justify-between my-6">
                <button onClick={() => router.forward()} className="p-2  end-0 border bg-green-500">
                    go
                </button>
                <button onClick={() => router.back()} className="p-2  end-0 border bg-red-500">
                    go back
                </button>
            </div>
            <h1 className="font-bold">{state?.title}</h1>
            <p>{state?.body}</p>
        </div>
    );
};

export default Page;
