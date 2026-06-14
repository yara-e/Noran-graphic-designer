"use client";
import { useState, useEffect } from "react";
import { addProject, getAllProjects, deleteProject } from "../lib/actions";
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [category, setCategory] = useState("socialMedia");
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const data = await getAllProjects();
      setProjects(data);
    }
    load();
  }, []);

  async function handleAddProject(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsUploading(true);
  
  // 1. Capture the form reference immediately
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  try {
    const result = await addProject(formData);
    
    if (result?.success) {
      toast.success("Project added successfully!");
      const updated = await getAllProjects();
      setProjects(updated);
      
      // 2. Use the captured reference to reset
      form.reset(); 
    } else {
      throw new Error("Upload failed on server.");
    }
  } catch (error: any) {
    console.error("Submission Error:", error);
    toast.error("Failed to add project.");
  } finally {
    setIsUploading(false);
  }
}

  return (
    <div className="p-10 bg-[#0a0a0a] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <form onSubmit={handleAddProject} className="flex flex-col gap-4 max-w-lg mx-auto bg-[#121212] p-6 rounded-xl border border-gray-800">
        <input name="title" placeholder="Project Title" required className="p-3 bg-[#1a1a1a] rounded border border-gray-700" />
        
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="p-3 bg-[#1a1a1a] rounded border border-gray-700">
          <option value="socialMedia">Social Media</option>
          <option value="logos">Logos</option>
          <option value="businessCard">Business Card</option>
          <option value="motionGraphics">Motion Graphics</option>
        </select>

<div className="flex flex-col gap-2">
  <label className="text-xs text-gray-400 uppercase tracking-wider">Project Type</label>
  <select name="type" required className="p-3 bg-[#1a1a1a] rounded border border-gray-700">
    <option value="vertical">Vertical</option>
    <option value="horizontal">Horizontal</option>
  </select>
</div>
        <div className="flex flex-col gap-2">
          <label className="text-xs text-gray-400 uppercase">Thumbnail Image</label>
          <input type="file" name="thumbnail" accept="image/*" required className="p-3 bg-[#1a1a1a] rounded border border-gray-700" />
        </div>

        {category === "motionGraphics" && (
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-400 uppercase">Video URL</label>
            <input type="url" name="videoUrl" placeholder="https://..." className="p-3 bg-[#1a1a1a] rounded border border-gray-700" />
          </div>
        )}
        
        <button type="submit" disabled={isUploading} className="bg-[#e21c61] p-3 rounded font-bold hover:bg-[#d61a5a] transition">
          {isUploading ? "Uploading..." : "Add Project"}
        </button>
      </form>

      <table className="w-full mt-10 border-collapse">
        <thead>
          <tr className="border-b border-gray-800 text-left">
            <th className="p-4 text-gray-500">Title</th>
            <th className="p-4 text-gray-500">Preview</th>
            <th className="p-4 text-gray-500">Category</th>
            <th className="p-4 text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p._id} className="border-b border-gray-800">
              <td className="p-4">{p.title}</td>
              <td className="p-4"><img src={p.imageUrl} className="w-16 h-16 object-cover rounded" /></td>
              <td className="p-4 capitalize">{p.category}</td>
              <td className="p-4">
                <button onClick={async () => {
                    setDeletingId(p._id);
                    await deleteProject(p._id);
                    setProjects(projects.filter(proj => proj._id !== p._id));
                    setDeletingId(null);
                  }} 
                  className="text-red-500 hover:underline"
                >
                  {deletingId === p._id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}