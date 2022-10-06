import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  const [picDisplay, setPicDisplay] = React.useState(false);
  function showPic(params) {
    setPicDisplay(true);
  }
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0 auto",
      }}>
      <h1 style={{ textAlign: "center", width: "100%", fontSize: 55 }}>
        Hey Steve...
      </h1>
      <section
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 8,
          marginBottom: 16,
        }}>
        <p style={{ fontSize: 32 }}>
          Wanna come to a super soft birthday party?
        </p>
        {!picDisplay && (
          <button
            style={{ minWidth: 100, borderRadius: 2 }}
            onClick={() => {
              setPicDisplay(true);
            }}>
            Yes
          </button>
        )}
      </section>
      <div
        style={{
          display: picDisplay ? "flex" : "none",
          justifyContent: "center",
        }}>
        <StaticImage
          src='../images/letterkenny-super-soft.webp'
          style={{
            background: "black",
            border: "8px solid black",
            width: "45%",
          }}
        />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
