import React, { useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      const url = `http://localhost:5000/service`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    };
    
  return (
    <div className="w-50 mx-auto">
      <PageTitle title="addservice" />
      <h2 className="text-center mt-5 mb-5">Please Add Service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Service"/>
      </form>
    </div>
  );
};

export default AddService;