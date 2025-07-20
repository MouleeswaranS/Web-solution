// src/app/page.tsx
import ImageSlider from '../Components/ImageSlider';

import Navbar from '../Components/Navbar';


export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-900">
      <ImageSlider />
      <Navbar />
    </main>
  );
}
