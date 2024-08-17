import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: NextRequest) {
    try {
        // Resolve the path to the JSON file
        const jsonFilePath = path.join(process.cwd(), "data", "projects.json");

        // Read the JSON file
        const jsonData = await fs.readFile(jsonFilePath, "utf-8");

        // Parse the JSON data
        let projects = JSON.parse(jsonData);

        // Sort the projects in descending order by `id`
        projects = projects.sort((a: any, b: any) => b.id - a.id);

        // Create a response
        const response = NextResponse.json(projects, { status: 200 });

        // Set Cache-Control header for caching
        response.headers.set(
            "Cache-Control",
            "public, max-age=3600, stale-while-revalidate=86400"
        );

        // Return the response with caching
        return response;
    } catch (error) {
        // Return an error response if something goes wrong
        return NextResponse.json(
            { message: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
