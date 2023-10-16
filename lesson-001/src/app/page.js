"use client";
import {useEffect} from "react";
import Image from "next/image";
import RasmUser from "@/assets/images/user.png";

const page = () => {
    
    const style = {
        backgroundImage: `url(${RasmUser.src})`,
        height: "800px",
    };

    useEffect(() => {
        console.log(RasmUser);
    }, []);

    return (
        <>
            <div style={style} className="container mx-auto p-5 px-4 border">
                <h1>HOME PAGE</h1>
                <Image
                    src="https://picsum.photos/id/123/400/400"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
        </>
    );
};

export default page;
