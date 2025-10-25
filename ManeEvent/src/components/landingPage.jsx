import React from "react";
import Footer from "../components/footer";
import CheckHeader from"../components/checkHeader";

export default function PublicWelcome(){
    return (
        <div className="min-h-screen flex flex-col bg-white">
        
        <CheckHeader />

        <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <h1 
            className="text-4xl font-bold mb-4"
            style={{ color: "#2b6150"}}>
                Welcome to Mane Event!
            </h1>
            <p
            className="text-lg mb-6"
            style={{ color: "#2b6150"}}>
                Connect with beauty professionals near you, book services, and manage your appointments all in one place!
            </p>
        </main>
        <Footer />
        </div>
    );
}

