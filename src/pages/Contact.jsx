import React, { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import NutCracker from "../models/NutCracker";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(
    "nutcracker_Body_skeleton|walk.001"
  );

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("nutcracker_Body_skeleton|Fire");
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });

        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("nutcracker_Body_skeleton|walk.001");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("nutcracker_Body_skeleton|walk.001");
        console.log(error);
        showAlert({
          show: true,
          text: "I didnt receive your message",
          type: "danger",
        });
      });
  };

  const handleFocus = () =>
    setCurrentAnimation("nutcracker_Body_skeleton|Search1");
  const handleBlur = () =>
    setCurrentAnimation("nutcracker_Body_skeleton|walk.001");

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="from_name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Email
            <input
              type="email"
              name="from_email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 6], fov: 75, near: 0.1, far: 1000 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={2.2} position={[0, 0, 1]} />
            <ambientLight intensity={0.25} />
            <NutCracker
              currentAnimation={currentAnimation}
              position={[0, -2.4, 1.85]}
              rotation={[0, -0.55, 0]}
              scale={[0.05, 0.05, 0.05]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
