"use server";
import { redirect } from "next/navigation";
import { Project } from "../models/Project";
import { connectToDatabase } from "./db";
import { imagekit } from "./imageKit";
import { revalidatePath } from "next/cache";

export async function addProject(formData: FormData) {
    await connectToDatabase();
    console.log(formData);
    const thumbnail = formData.get("thumbnail") as File;
    const upload = await imagekit.upload({
        file: Buffer.from(await thumbnail.arrayBuffer()),
        fileName: thumbnail.name,
    });

    // Create the project
    await Project.create({
        title: formData.get("title"),
        category: formData.get("category"),
        type: formData.get("type"),
        imageUrl: upload.url,
        fileId: upload.fileId,
        videoUrl: formData.get("videoUrl") || "", // Explicitly handle the string
    });

    revalidatePath("/admin");

    // CRITICAL: Return a simple object so the frontend knows it finished
    return { success: true };
}

export async function deleteProject(id: string) {
    const project = await Project.findById(id);
    if (project) {
        // Delete from ImageKit
        await imagekit.deleteFile(project.fileId);
        // Delete from DB
        await Project.findByIdAndDelete(id);
    }
    revalidatePath("/admin");
}

export async function getAllProjects() {
    await connectToDatabase(); // ✅ Add this line!

    // Now perform the query
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();

    // Convert _id to string for the client-side
    return projects.map(p => ({
        ...p,
        _id: p._id.toString()
    }));
}

export async function getFilteredProjects(filters: { category?: string; type?: string } = {}) {
    await connectToDatabase();

    // Build a query object dynamically
    const query: any = {};
    if (filters.category) query.category = filters.category;
    if (filters.type) query.type = filters.type;

    const projects = await Project.find(query).sort({ createdAt: -1 }).lean();

    return projects.map(p => ({
        ...p,
        _id: p._id.toString()
    }));
}