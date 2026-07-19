export default function Templates() {

  const templates = [
    {
      title: "Blog Generator",
      description: "Create SEO-friendly blog posts with AI assistance.",
      icon: "✍️",
    },
    {
      title: "Email Writer",
      description: "Generate professional emails in seconds.",
      icon: "📧",
    },
    {
      title: "Product Description",
      description: "Write attractive product descriptions that convert.",
      icon: "🛒",
    },
    {
      title: "Resume Builder",
      description: "Build a professional resume using AI.",
      icon: "📄",
    },
  ];


  return (

    <div className="space-y-6">


      {/* Header */}
      <div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          AI Templates
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Choose ready-made AI templates to automate your daily tasks.
        </p>

      </div>



      {/* Template Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


        {
          templates.map((template)=>(

            <div
              key={template.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >


              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl transition group-hover:scale-110">
                {template.icon}
              </div>



              {/* Content */}
              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                {template.title}
              </h3>


              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {template.description}
              </p>



              {/* Button */}
              <button
                className="mt-5 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Use Template
              </button>


            </div>

          ))
        }


      </div>



      {/* AI Banner */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">

        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300">
          Create your own AI workflow
        </h2>

        <p className="mt-2 text-sm text-blue-700 dark:text-blue-400">
          Combine templates with AI agents to build powerful automated solutions.
        </p>


      </div>


    </div>

  );

}


