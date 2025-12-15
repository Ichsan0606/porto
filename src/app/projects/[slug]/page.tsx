import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* Light background */}
      <main className="bg-gray-50 min-h-screen py-28">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            
            {/* Grid Layout */}
            <div className="grid gap-10 md:grid-cols-2 items-center">
              
              {/* LEFT – TEXT */}
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h1>

                <p className="text-gray-600 text-lg mb-6">
                  {project.desc}
                </p>

                <article className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {project.content}
                </article>
              </div>

                {/* RIGHT – IMAGE */}
                <div className="group relative w-full h-[280px] md:h-[420px] rounded-2xl overflow-hidden">
                
                {/* Image */}
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
