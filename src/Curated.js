import Box from "./box";

export default function Curated() {
  return (
    <div>
      <h3 className="text-3xl my-10">Currated Pics</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Box img="../images/model-1.jpg" />   
          <Box img="../images/model-2.jpg" />
          <Box img="../images/model-3.jpg" />
          <Box img="../images/model-4.jpg" />
        </div>
      </div>
    </div>
  );
}
