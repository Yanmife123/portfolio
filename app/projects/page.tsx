import Projects from "@/components/pages/project/project-section";
import { GeometricMatrix } from "@/components/testing/geo-background";
import { FloatingSquares } from "@/components/ui/box-animation";

export default function HomeProjectsGrid() {
  return (
    <div className="relative w-full max-w-7xl mx-auto sm:px-19 px-6 ">
      {/* 1. Top Right: Frames the navigation menu */}
      <FloatingSquares top="8%" right="4%" zIndex={0} />
      {/* 1. Top Right: Frames the navigation menu */}
      <FloatingSquares top="1%" left="1%" zIndex={0} />
      <FloatingSquares top="50%" right="1%" zIndex={0} />
      {/* 2. Bottom Right: Anchors the large teal circle to the bottom corner */}
      <FloatingSquares top="auto" bottom="8%" right="7%" zIndex={2} />
      {/* 3. Bottom Left: Fills the empty dark void under your buttons */}
      <FloatingSquares
        top="auto"
        bottom="15%"
        left="5%"
        right="auto"
        zIndex={0}
      />
      {/* 4. Center Gap: Tucked in the background between the text and the big circle */}
      <FloatingSquares top="35%" right="45%" zIndex={0} />
      {/* 5. Top Mid-Left: Floating gently high above the main text box */}
      <FloatingSquares top="12%" left="40%" right="auto" zIndex={0} />

      <div>
        <Projects />
      </div>
    </div>
  );
}
