import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="p-8">
      {/* Header */}
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
        Charles Devane's Portfolio
      </h1>

      {/* Introduction */}
      <p className="mb-4 text-lg text-gray-700">
        {`Hi, I'm Charles! A passionate software engineer focused on frontend development
        with full-stack expertise. Currently, I'm leading a frontend team, leveraging
        technologies like React, JavaScript, and C#. I'm actively expanding my knowledge 
        in backend architecture and Azure cloud systems to grow further as a developer.`}
      </p>
      <p className="mb-4 text-lg text-gray-700">
        {`I believe in the power of clean code, love static typing for early error detection, 
        and always code in dark mode for comfort during long sessions. In my free time, 
        I explore new technologies, refine my skills with Vim, and enjoy playing roguelike games.`}
      </p>

      {/* Job Experience */}
      <div className="my-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Job Experience</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Frontend Team Lead Developer</h3>
            <p className="text-gray-700">
              Managing a team of 5 developers while contributing to full-stack development.
              Focused on frontend technologies like React and improving backend skills with C#.
            </p>
            <p className="text-sm text-gray-500">Duration: Over 1 year in this role</p>
          </li>
          <li className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">Full-Stack Software Engineer</h3>
            <p className="text-gray-700">
              Started my career working across the stack, with a focus on delivering clean and efficient code.
              Leveraged React, JavaScript, and C# to build scalable applications.
            </p>
            <p className="text-sm text-gray-500">Experience: 20+ months total</p>
          </li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="my-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Projects</h2>
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg shadow-sm">
            <a
              href="#"
              className="text-xl font-semibold text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project One: React Dashboard
            </a>
            <p className="text-gray-700">A dashboard built with React and Tailwind CSS.</p>
          </li>
          <li className="p-4 border rounded-lg shadow-sm">
            <a
              href="#"
              className="text-xl font-semibold text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Two: API Backend with C#
            </a>
            <p className="text-gray-700">Developed a RESTful API using C# and .NET Core.</p>
          </li>
        </ul>
      </div>

      {/* Blog Posts Section */}
      <div className="my-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Blog Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
