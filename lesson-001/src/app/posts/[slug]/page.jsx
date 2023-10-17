"use client";
import React from "react";

const page = ({params: {slug}}) => {
    console.log(slug);
    return (
        <div className="border-blue-600 my-5 container mx-auto p-5 px-4 border">
            <h1 className="text-left"> {slug} raqam</h1>
        </div>
    );
};

export default page;
