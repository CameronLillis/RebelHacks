"use client";

import Image from "next/image";
import Link from "next/link";

import axios from "axios";
import { useState } from "react";

import "./styles.css";
import Header from "./components/ui/Header";
import Faq from "./components/ui/FAQ/faq";

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post("/sample", {
        key: "value",
      });
      setData(response.data);
      console.log("Data: ", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <main>
        {/* Background graident is broken on ultrawide resolution */}
        <section id="home" className="hero-section">
          <Header />
          <div className="hero-wrapper">
            <div className="hero-title">
              <h1 className="title-org">REBEL</h1>
              <h1 className="title-org">HACKS</h1>
              <h2 className="title-school">UNLV 2026</h2>

              <p className="hero-description">
                Come together to design, develop, and present projects that
                tackle real-world problems!
              </p>

              <p className="hero-date">FRI & SAT February 20–21, 2026</p>
            
            </div>

            <div className="hero-image-wrapper">
              <Image
                src="/images/vegas-sign.svg"
                alt="Las Vegas neon sign"
                width={580}
                height={100}
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section id="about" className="faq">
          <Faq />
        </section>
      </main>
    </>
  );
}
