import { Card, CardMedia } from "@mui/material";

export default function VideoCard() {
  const videoUrl =
    "https://www.youtube.com/embed/xN-VD-i80DA?si=1DyjDOOZmFKIEnLQ";
  return (
    <div className="m-4 grid grid-cols-2">
      <Card>
        <CardMedia
          component="iframe"
          title="Presentation MindTech App"
          src={videoUrl}
          style={{ height: 600 }}
        />
      </Card>

      <div className="mx-8 max-w-2xl">
        <div className="flex items-center gap-x-4 text-xs mb-4">
          <time dateTime="2023-06-16" className="text-gray-500">
            Jun 16, 2023
          </time>

          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Web Development
          </a>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
          MindTech App
        </h2>
        <p className="mt-2 text-md leading-8 text-gray-600">
          This project involves developing a technology-focused web application
          using MongoDB for database management, Web Services API for data
          communication, and React Native for cross-platform app development.
          Node.js powers the backend, ensuring efficient server-side operations.
          Project management is handled with Trello, design with Figma, and
          payment integration through MercadoPago. The result is a scalable,
          responsive, and feature-rich app offering seamless user experiences
          and secure e-commerce functionality.
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <a
            href="https://mindtech.store/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Website <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
