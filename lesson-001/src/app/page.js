import Link from "next/link";
import Image from "next/image";

const page = () => {
    return (
        <>
            <div className="container mx-auto p-5 px-4 border">
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
