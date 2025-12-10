import { getPlanets } from "@/lib/api";

export default function About() {
    
    return (
        <main className="p-6 text-center justify-center flex flex-col items-center">
            <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent
                bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300">
                About Planetz
            </h1>

            <p className="max-w-2xl opacity-70 mb-6">
                Planetz is a cosmic exploration platform that allows users to discover and learn about various planets and moons in our solar system and beyond. Our mission is to provide an engaging and informative experience for space enthusiasts of all ages.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc list-inside max-w-2xl text-left mb-6">
                <li>Comprehensive database of planets and moons</li>
                <li>High-quality images and descriptions</li>
                <li>User-friendly interface for easy navigation</li>
                <li>Regular updates with new celestial bodies</li>
            </ul>       
            <p className="max-w-2xl opacity-70">    
                Whether you're a student, educator, or simply a space enthusiast, Planetz aims to be your go-to resource for exploring the wonders of our universe. Join us on this cosmic journey and discover the beauty and mystery of the planets!
            </p>
        </main>
    );  
}