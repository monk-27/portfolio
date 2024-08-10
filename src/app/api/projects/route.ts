import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(req: NextRequest) {
    try {
        // Resolve the path to the JSON file
        const jsonFilePath = path.join(
            process.cwd(),
            "data",
            "projects.json"
        );

        // Read the JSON file
        const jsonData = await fs.readFile(jsonFilePath, "utf-8");

        // Parse the JSON data
        let projects = JSON.parse(jsonData);

        // Sort the projects in descending order by `id`
        projects = projects.sort((a: any, b: any) => b.id - a.id);

        // Return the sorted projects as a JSON response
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        // Return an error response if something goes wrong
        return NextResponse.json(
            { message: "Failed to fetch projects" },
            { status: 500 }
        );
    }
}
