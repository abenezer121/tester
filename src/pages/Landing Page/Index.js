import React from "react";
import Footer from "../../components/Footer";
import DocsPreview from "./DocsPreview";
import Intro from "./Intro";

function Index() {
  return (
    <div className=" w-full">
      <Intro />
      <DocsPreview />
      <div className="flex justify-center bg_rain">
        <div className="sw">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;
