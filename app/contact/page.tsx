import { getPlanets } from "@/lib/api";
export default async function Contact() {
    
    return (
        <main className="p-6 text-center justify-center flex flex-col items-center">
            <h1 className="te   xt-4xl font-extrabold mb-4 bg-clip-text text-transparent
                bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300">
                Contact Us
            </h1>

            <p className="max-w-2xl opacity-70 mb-6">
                We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <ul className="list-disc list-inside max-w-2xl text-left mb-6">
                <li>Email:  <a href="mailto:xiaoyuan.drhorse@gmail.com" className="text-sky-400 hover:underline">xiaoyuan.drhorse@gmail.com</a></li>
                <li>Twitter: <a href="https://twitter.com/xiaoyuanlv" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">@xiaoyuanlv</a></li>
                <li>GitHub:  <a href="https://github.com/xiaoyuan31" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">xiaoyuan31</a></li>
            </ul>       
            <p className="max-w-2xl opacity-70">    
                We aim to respond to all inquiries within 2 business days. Thank you for your interest in Planetz, and we look forward to connecting with you!
            </p>
        </main>
    );  
}
