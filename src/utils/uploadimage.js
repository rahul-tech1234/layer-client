import toast from "react-hot-toast";

export const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    const Response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
            method: "POST",
            body: formData,
        },
    );
    const data = await Response.json();

    if (!data.success) {
        toast.error("Image upload faield");
    }
    return data.data.url;
};
