"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const ProfileUpdate = ({ user }) => {
  const router = useRouter();
  const { name, image } = user;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const exactFormData = Object.fromEntries(formData.entries());

    console.log({ ...exactFormData });

    const { data, error } = await authClient.updateUser({
      ...exactFormData,
    });

    if (data) {
      router.refresh("/my-profile");

      router.replace("/my-profile");
      return;
    }

    if (error) {
      alert("failed to upload");
      return;
    }
  };

  return (
    <div className="min-h-screen  bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md border border-gray-100">
        {/* প্রিভিউ সেকশন */}
        <div className="flex flex-col items-center mb-8 ">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-100 shadow-md"
            />
          </div>
          <h3 className="mt-3 text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-400 mt-3 tracking-wider text-sm uppercase">
            Update your Profile
          </p>
        </div>

        <Form
          className="flex  flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={handleUpdate}
        >
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input
              placeholder="Enter your name"
              className={"rounded-lg py-3 shadow-none bg-[#94A3B810]"}
            />
          </TextField>
          <TextField isRequired name="image" type="text">
            <Label>Profile Image URL</Label>
            <Input
              placeholder="Paste image URL here"
              className={"rounded-lg py-3 shadow-none bg-[#94A3B810]"}
            />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              fullWidth
              className={"bg-linear-[90deg,#6B38D4_0%,#BA0035_100%] mt-3"}
            >
              Update
            </Button>
          </div>
        </Form>
        <p className="text-center mt-6 text-gray-400 text-xs">
          Updates will reflect across your entire profile.
        </p>
      </div>
    </div>
  );
};

export default ProfileUpdate;
