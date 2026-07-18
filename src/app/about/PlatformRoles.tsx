export default function UserRoles() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Platform Roles
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* User */}
          <div className="rounded-2xl border p-8 bg-white dark:bg-slate-950">
            <h3 className="text-2xl font-bold">User</h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Users can explore AI tools, generate content, chat with the AI
              assistant, analyze documents, receive recommendations, and manage
              their own account securely.
            </p>

            <ul className="mt-5 list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Explore AI tools</li>
              <li>Use AI Chat Assistant</li>
              <li>Generate AI content</li>
              <li>Analyze documents</li>
              <li>Receive AI recommendations</li>
              <li>Manage profile</li>
            </ul>
          </div>

          {/* Admin */}
          <div className="rounded-2xl border p-8 bg-white dark:bg-slate-950">
            <h3 className="text-2xl font-bold">Administrator</h3>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Administrators manage the platform, AI tools, users, analytics,
              and system settings while ensuring smooth operation.
            </p>

            <ul className="mt-5 list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Manage AI tools</li>
              <li>Manage users</li>
              <li>View analytics</li>
              <li>Monitor AI usage</li>
              <li>Control platform settings</li>
              <li>Maintain security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}