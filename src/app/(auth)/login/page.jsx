"use client";
import { LoginHandle } from "@/utils/LoginHandle";

// import {Check} from "`@gravity-ui/icons`";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

export default function LoginPage() {
  const [eye, setEye] = useState(false);

  const eyeClick = () => {
    setEye(!eye);
  };


  return (
    <section className="py-20">
      {/* register area */}

      <div className="rounded-4xl  p-8 md:p-12 max-w-xl mx-auto w-[90%] border border-(--outline)">
        <div className="text-center space-y-4 mb-10">
          <h4 className="text-4xl font-bold text-(--on-surface)">
            Join SkillSphere Today
          </h4>

          <p className="text-(--textVariant)">
            Start your premium learning journey with world-class mentors.
          </p>
        </div>

        <Form
          className="flex  flex-col gap-4"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={LoginHandle}
        >
          {/* email field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input
              placeholder="name@company.com"
              className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
            />
            <FieldError />
          </TextField>

          <TextField
            className={"relative"}
            isRequired
            minLength={8}
            name="password"
            type={`${eye ? "text" : "password"}`}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Create a strong password"
              className="rounded-lg py-3 shadow-none bg-[#94A3B810]"
            />
            <div className="absolute top-9 right-3 text-lg" onClick={eyeClick}>
              {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              fullWidth
              className={"bg-linear-[90deg,#6B38D4_0%,#BA0035_100%]"}
            >
              Log in
            </Button>
          </div>
        </Form>

        <div className="mt-8 space-y-5">
          <div className="flex justify-between text-xs items-center gap-2 text-[#94A3B8]">
            <p className="border  w-[50%] md:w-full   "></p>
            <p className="w-full text-center tracking-widest">
              OR CONTINUE WITH
            </p>
            <p className=" border w-[50%] md:w-full "></p>
          </div>

          <Button className="w-full border border-(--outline) bg-white">
            <Icon icon="devicon:google" />
            <span className="text-(--on-surface)">Login with Google</span>
          </Button>

          <div className="flex gap-1 justify-center">
            <p className="text-[#494454]">Don't have an account? </p>{" "}
            <Link
              href={"/register"}
              className="text-(--primaryViolet) font-semibold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
