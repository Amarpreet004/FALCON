

import GradientText from './Gradientext'

export default function GradientTextDemo() {
  return (
    <h1>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="text-4xl md:text-6xl font-bold custom-class"
      >
      Graphics Design
     </GradientText>
    </h1>
  );
}