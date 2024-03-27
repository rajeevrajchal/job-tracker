"use client";

import TextEditor from "@/components/text-editor";
import { useState } from "react";

const MyAccount = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <p>My Account</p>
      <TextEditor value={value} setValue={setValue} />
    </div>
  );
};

export default MyAccount;
