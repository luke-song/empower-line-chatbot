"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />{" "}
        </div>
        <div className={styles.links}>
          <a href="/about">About</a>
          <a href="/donate">Donate</a>
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
          Racial and Ethnic Minorities Disproportionate Impact
        </button>
        <button className={styles.button}>
          Women and Girls Global Inequality
        </button>
        <button className={styles.button}>
          LGBTQ+ Community Discrimination and Violence
        </button>
        <button className={styles.button}>
          Indigenous Peoples Marginalization and Land Rights
        </button>
        <button className={styles.button}>
          Persons with Disabilities Accessibility and Discrimination
        </button>
        <button className={styles.button}>
          Refugees and Displaced Persons Forced Displacement
        </button>
      </div>
    </div>
  );
}
