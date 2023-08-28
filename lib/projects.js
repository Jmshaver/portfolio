import fs from 'fs';
import path from 'path';

export async function getProjectsData() {
    const filePath = path.join(process.cwd(), "config", "projects.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const projectsJson = JSON.parse(fileContent);

    return projectsJson
};
