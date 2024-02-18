"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />{" "}
        </div>
        <div className={styles.links}>
          {/* <a href="/about">About</a>
          <a href="/donate">Donate</a> */}
        </div>
      </nav>
    );
  };

  const openVoiceflowChat = () => {
    (function (d, t) {
      var v = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.voiceflow.chat.load({
          verify: { projectID: "65d1d923e3074928b3ebea62" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
        window.voiceflow.chat.open(); // Open the chat interface
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
  };

  useEffect(() => {
    openVoiceflowChat();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={openVoiceflowChat}>
          Let's talk...
        </button>
      </div>
    </div>
  );
}
