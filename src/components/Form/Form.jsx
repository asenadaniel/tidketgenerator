import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
  const [uploadFiles, setUploadedFile] = useState(null);


  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFile(acceptedFiles[0]);
    // console.log("Uploaded Files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  const onSubmit = (data) => {
    navigate("/ticket", {
      state: { ticketData: data, uploadFiles }

    });

    // console.log(data)
    // console.log(uploadFiles)
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[450px] p-6 flex flex-col gap-6"
      >
        <h1 className="text-white text-lg font-medium mb-4">Upload Avatar</h1>

        {/* Drag and Drop Box */}
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-500 bg-gray-900/40 backdrop-blur-lg p-10 rounded-2xl text-white flex flex-col items-center justify-center cursor-pointer hover:bg-gray-800/80 transition"
        >
          <input {...getInputProps()} />
          {!uploadFiles && <Upload size={40} className="text-gray-300 mb-3" />}
          {!uploadFiles && <p className="text-gray-400">Drag and drop or click to upload</p>}
          {uploadFiles && (
            <p className="text-gray-300 mt-2">{uploadFiles.name}</p>
          )}
        </div>

        {/* Full Name Input */}
        <div>
          <label htmlFor="fullName" className="text-white">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            {...register("FullName", { required: "Full Name is required" })}
            className="p-2 rounded border border-gray-500 w-full"
          />
          {errors.FullName && (
            <p className="text-red-500 text-sm">{errors.FullName.message}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="p-2 rounded border border-gray-500 w-full"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm">{errors.Email.message}</p>
          )}
        </div>

        {/* GitHub Username Input */}
        <div>
          <label htmlFor="githubUsername" className="text-white">
            GitHub Username
          </label>
          <input
            id="githubUsername"
            type="text"
            placeholder="GitHub Username"
            {...register("GitHubUsername", {
              required: "GitHub Username is required",
            })}
            className="p-2 rounded border border-gray-500 w-full"
          />
          {errors.GitHubUsername && (
            <p className="text-red-500 text-sm">
              {errors.GitHubUsername.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white p-3 rounded hover:bg-gray-800 transition"
        >
          Generate My Ticket
        </button>
      </form >
    </div >
  );
}

export default Form;