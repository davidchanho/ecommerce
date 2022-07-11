import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import { Form } from "./ContactForm.styles";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().phone().required(),
  message: yup.string().required(),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <p>{errors.name?.message}</p>

      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input {...register("message")} />
      <p>{errors.message?.message}</p>

      <input type="submit" />
    </Form>
  );
}

export default ContactForm;
