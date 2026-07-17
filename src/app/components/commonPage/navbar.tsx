"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
  User,
  Settings,
  LogOut,
  Sparkles,
  ChevronRight,
  TrendingUp,
  CreditCard,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/Explore" },
  { name: "AI Tools", href: "/ai-tools" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

interface NotificationItem {
  id: number;
  title: string;
  desc: string;
  time: string;
  read: boolean;
  type: "success" | "info" | "warning";
}

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "API Key Created",
    desc: "Your production API key has been generated successfully.",
    time: "2 mins ago",
    read: false,
    type: "success"
  },
  {
    id: 2,
    title: "New Agent Released",
    desc: "AgenticAI V2.0 Chatbot Builder is now available for preview.",
    time: "1 hour ago",
    read: false,
    type: "info"
  },
  {
    id: 3,
    title: "Usage Alert",
    desc: "You have used 85% of your free tier credits this month.",
    time: "1 day ago",
    read: true,
    type: "warning"
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const router = useRouter();

const { data: session, isPending } = authClient.useSession();

const user = session?.user;
  
  // Dropdown states
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  // Notification State
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Search input query
  const [searchQuery, setSearchQuery] = useState("");

  // Refs for closing dropdowns on click outside
  const notificationsRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for glassmorphism styling adjustments
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Sync on Mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Theme Toggle Handler
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
      if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
        setAvatarOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        // Only close if click wasn't on search toggle button itself
        const target = event.target as HTMLElement;
        if (!target.closest("[data-search-trigger]")) {
          setSearchOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((n) => ({ ...n, read: true }))
    );
  };


  const handleLogout = async () => {
  try {
    await authClient.signOut();

    setAvatarOpen(false);

    router.push("/login");

    router.refresh();

  } catch (error) {
    console.error("Logout failed:", error);
  }
};

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
            : "py-5 bg-white dark:bg-zinc-950 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-300">
                <Bot className="w-5.5 h-5.5" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse border-2 border-white dark:border-zinc-950" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white select-none">
                Agentic<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">AI</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full select-none ${
                      isActive
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                    }`}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Hover Sliding Pill Effect */}
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.span
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-full -z-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* CONTROLS & USER INTERFACE */}
            <div className="flex items-center gap-2 lg:gap-3 shrink-0">
              
              {/* Search Toggle Button */}
              <button
                data-search-trigger
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {/* Notifications Dropdown Trigger */}
              <div className="relative" ref={notificationsRef}>
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors relative"
                  title="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 text-[10px] font-bold text-white bg-violet-600 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-zinc-950">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown Panel */}
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                        <span className="font-semibold text-sm text-zinc-900 dark:text-white">Notifications</span>
                        {unreadCount > 0 && (
                          <button
                            onClick={markAllAsRead}
                            className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline"
                          >
                            Mark all read
                          </button>
                        )}
                      </div>
                      <div className="divide-y divide-zinc-100 dark:divide-zinc-800 max-h-80 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
                            No notifications
                          </div>
                        ) : (
                          notifications.map((item) => (
                            <div
                              key={item.id}
                              className={`p-4 flex gap-3 transition-colors ${
                                item.read
                                  ? "bg-transparent"
                                  : "bg-violet-50/20 dark:bg-violet-950/5"
                              }`}
                            >
                              <div className="mt-1">
                                {item.type === "success" && (
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5" />
                                )}
                                {item.type === "info" && (
                                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
                                )}
                                {item.type === "warning" && (
                                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-baseline gap-2">
                                  <h4 className="font-medium text-xs text-zinc-900 dark:text-white">{item.title}</h4>
                                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 shrink-0">{item.time}</span>
                                </div>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 text-center bg-zinc-50 dark:bg-zinc-900/50">
                        <Link href="/notifications" className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
                          View all notifications
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Separator line */}
              <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

              {/* USER PROFILE AVATAR OR SIGNUP/LOGIN ACTIONS */}
              {user && (
              <div 
                className="relative flex items-center gap-2" 
                ref={avatarRef}
              >
                
                {/* User Avatar Action */}
    <button
      onClick={() => setAvatarOpen(!avatarOpen)}
      className="flex items-center gap-2 group"
    >
      <div className="relative w-8.5 h-8.5 rounded-full ring-2 ring-violet-500/20 dark:ring-violet-500/10 group-hover:ring-violet-500/50 dark:group-hover:ring-violet-500/40 transition-all duration-300 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-violet-500 to-indigo-500 text-white font-semibold text-xs leading-none shadow-sm shadow-violet-500/10">

        {user?.image ? (
          <img
            src={user.image}
            alt={user.name || "User"}
            className="w-full h-full object-cover"
          />
        ) : (
          user?.name
            ?.split(" ")
            .map((n)=>n[0])
            .join("")
            .slice(0,2)
            .toUpperCase()
        )}

      </div>
    </button>

                {/* Avatar Menu Dropdown */}
                <AnimatePresence>
                  {avatarOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 top-full w-56 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                        <p className="font-semibold text-sm text-zinc-900 dark:text-white">
                        {user?.name || "User"}
                      </p>

                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                        {user?.email || ""}
                      </p>
                        <div className="mt-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950/50 border border-violet-200/50 dark:border-violet-850/50 text-[10px] font-semibold text-violet-700 dark:text-violet-400">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Premium Pro</span>
                          {/* <span>
                          {user?.role === "admin"
                            ? "Admin"
                            : "Free Plan"}
                         </span> */}
                        </div>
                      </div>
                      
                      <div className="p-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium"
                          onClick={() => setAvatarOpen(false)}
                        >
                          <TrendingUp className="w-4 h-4 text-zinc-400" />
                          <span>My Workspace</span>
                        </Link>
                        <Link
                          href="/settings"
                          className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium"
                          onClick={() => setAvatarOpen(false)}
                        >
                          <Settings className="w-4 h-4 text-zinc-400" />
                          <span>Developer Settings</span>
                        </Link>
                        <Link
                          href="/billing"
                          className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium"
                          onClick={() => setAvatarOpen(false)}
                        >
                          <CreditCard className="w-4 h-4 text-zinc-400" />
                          <span>Billing & Plans</span>
                        </Link>
                      </div>

                      <div className="border-t border-zinc-100 dark:border-zinc-800 p-1">
                        <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-colors font-medium"
                        >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
              )}

              {/* Login & Sign Up CTA (Hidden on small viewports) */}
              {!user && (
              <div className="hidden md:flex items-center gap-2 ml-2">
                <Link
                  href="/login"
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors select-none"
                >
                  Log In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-750 hover:to-indigo-750 shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 active:scale-[0.98] transition-all select-none"
                >
                  Sign Up
                </Link>
              </div>
)}
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                title="Open Navigation Menu"
              >
                <Menu className="w-5.5 h-5.5" />
              </button>

            </div>
          </div>
        </div>
      </motion.header>

      {/* SEARCH OVERLAY SCREEN */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-zinc-950/45 dark:bg-black/60 backdrop-blur-xs"
            />
            
            {/* Search Dialog */}
            <div className="relative min-h-screen flex items-start justify-center p-4 pt-16 sm:pt-28">
              <motion.div
                ref={searchRef}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
              >
                {/* Search Bar Input */}
                <div className="relative border-b border-zinc-200 dark:border-zinc-800 p-4">
                  <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search AI agents, tools, documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-500"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-7 top-1/2 -translate-y-1/2 p-1 text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md transition-colors"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Search suggestions & results */}
                <div className="p-5 max-h-96 overflow-y-auto">
                  {searchQuery.trim().length === 0 ? (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Recommended Searches</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {["AI Agent Builder", "Pricing plans", "Custom integrations", "Vector DB plugin", "Auth tokens", "API Reference"].map((rec) => (
                            <button
                              key={rec}
                              onClick={() => setSearchQuery(rec)}
                              className="px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-violet-50 dark:hover:bg-violet-950/20 hover:text-violet-600 dark:hover:text-violet-400 rounded-md transition-colors"
                            >
                              {rec}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Popular Tools</h4>
                        <div className="space-y-1">
                          {[
                            { name: "CodeAgent AI", desc: "Automated coding assistant for React & Next.js" },
                            { name: "Documind AI", desc: "Instantly index and search PDF and markdown manuals" },
                            { name: "Voiceflow Agent", desc: "Deploy voice UI systems in minutes" }
                          ].map((tool) => (
                            <button
                              key={tool.name}
                              onClick={() => setSearchQuery(tool.name)}
                              className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors text-left"
                            >
                              <div>
                                <p className="text-xs font-semibold text-zinc-900 dark:text-white">{tool.name}</p>
                                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">{tool.desc}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-zinc-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Results for &quot;{searchQuery}&quot;</h4>
                      <div className="p-8 text-center text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
                        Demo query: Search for <span className="font-semibold text-violet-600 dark:text-violet-400">&quot;{searchQuery}&quot;</span> triggered.
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-right">
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">Press ESC to close</span>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* MOBILE NAV DRAWER (SLIDE FROM RIGHT) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-zinc-950/45 dark:bg-black/60 backdrop-blur-xs"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-zinc-950 shadow-2xl flex flex-col z-50 border-l border-zinc-200 dark:border-zinc-800"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 dark:border-zinc-800">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex items-center justify-center w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                    Agentic<span className="text-violet-600 dark:text-violet-400">AI</span>
                  </span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  title="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-400"
                            : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4.5 h-4.5 transition-transform duration-300 ${isActive ? "text-violet-500 rotate-90" : "text-zinc-400"}`} />
                      </Link>
                    );
                  })}
                </nav>

                {/* Demo Info section in menu */}
                <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-2xl">
                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Premium Account Active</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Access to premium models, unlimited workflow builder, and priority support.
                  </p>
                </div>
              </div>

              {/* Drawer Actions Footer */}
              <div className="px-6 py-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    {theme === "light" ? (
                      <>
                        <Moon className="w-4.5 h-4.5" />
                        <span>Dark Theme</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-4.5 h-4.5" />
                        <span>Light Theme</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setNotificationsOpen(true);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors relative"
                  >
                    <Bell className="w-4.5 h-4.5" />
                    <span>Alerts ({unreadCount})</span>
                  </button>
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center text-sm font-semibold rounded-xl text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3 text-center text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-750 hover:to-indigo-750 transition-all text-center shadow-md shadow-violet-500/10"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
