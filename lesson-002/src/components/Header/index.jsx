import Link from "next/link";
import React from "react";

const index = () => {
    return (
        <div className="p-5 bg-green-500">
            <div className="flex gap-x-10">
                <h1>Header</h1>

                <ul className="flex gap-x-6">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/todos">Todos</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default index;
