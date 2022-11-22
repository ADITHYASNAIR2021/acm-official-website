import React from "react";
import FacultyManagement from "./../components/FacultyManagement";

function HomePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold p-[0.1]">HomePage</h1>
            <div className="Faculty-section min-w-screen min-h-screen font-RedRose font-bold leading-8">
                <FacultyManagement />
            </div>
        </div>
    );
}

export default HomePage;
