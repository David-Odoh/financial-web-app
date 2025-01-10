import React, { useRef, useState } from "react";

import Image from "@/components/shared/image";
import user from "@/assests/images/user-2.png";
import { Pen } from "@/components/icons/pen";
import toast from "react-hot-toast";
import { StaticImageData } from "next/image";
import EditProfileForm from "./_edit-form";

type MediaResult = {
  ipfsCID: string;
};

export default function EditProfile() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [profilePic, setProfilePic] = useState<string | StaticImageData>(user);

  const handlePenClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  async function handlePictureUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setIsUploading(true);
    const file = event.target.files?.[0];
    console.log("attempting to change file", file);
    if (!file) return;

    try {
      const arrayBuffer = await file.arrayBuffer();

      const response = await fetch("/api/imageUpload", {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": `attachment; filename="${file.name}"`,
        },
        body: arrayBuffer,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: MediaResult = await response.json();
      setIsUploading(false);
      setProfilePic(`https://gateway.pinata.cloud/ipfs/${data.ipfsCID}`);
      toast.success("Upload Success");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed. Pinata Credentials is Required");
      setIsUploading(false);
    }
  }

  return (
    <section>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-2">
        <div className="flex flex-col justify-center md:justify-start items-center mt-4">
          <div className="relative">
            <div className="max-w-[84px] max-h-[84px] md:max-w-[70px] md:max-h-[70px] rounded-[100px] overflow-hidden">
              <Image
                src={profilePic}
                alt="user"
                width={84}
                height={84}
                className="bg-cover max-w-[84px] max-h-[84px] md:max-w-[70px] md:max-h-[70px] rounded-full"
              />
            </div>
            <div
              onClick={handlePenClick}
              className="absolute cursor-pointer bottom-0 right-0 flex justify-center items-center text-white w-[24px] h-[24px] p-[6px] rounded-[100px] bg-[--color-brand-3] dark:bg-brand"
            >
              <Pen className="w-4 h-4" />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePictureUpload}
              className="hidden"
            />
          </div>
          {isUploading && (
            <div className="mt-8 text-[--color-brand-2]">Uploading...</div>
          )}
        </div>

        <div className="flex-grow">
          <EditProfileForm />
        </div>
      </div>
    </section>
  );
}
