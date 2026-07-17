import Link from "next/link";
import { Bot, ArrowLeft, Sparkles } from "lucide-react";


export default function NotFound() {

  return (

    <main className="
    min-h-screen
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-slate-950
    via-violet-950
    to-slate-900
    px-5
    ">


      <div className="
      max-w-lg
      w-full
      text-center
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-3xl
      p-10
      shadow-2xl
      ">


        {/* AI Icon */}

        <div className="
        relative
        mx-auto
        w-24
        h-24
        rounded-full
        bg-gradient-to-r
        from-violet-400
        to-violet-900
        flex
        items-center
        justify-center
        animate-pulse
        ">

          <Bot
          size={45}
          className="text-white"
          />


          <Sparkles
          size={20}
          className="
          absolute
          -top-2
          -right-2
          text-yellow-300
          "
          />


        </div>





        {/* 404 */}

        <h1 className="
        mt-8
        text-7xl
        font-extrabold
        bg-gradient-to-r
        from-violet-900
        to-violet-400
        text-transparent
        bg-clip-text
        ">

          404

        </h1>





        <h2 className="
        mt-4
        text-3xl
        font-bold
        text-white
        ">

          AI Page Not Found

        </h2>





        <p className="
        mt-4
        text-slate-300
        leading-7
        ">

          The AI agent couldn't locate this page.
          It may have been moved, deleted, or never existed.

        </p>






        {/* Buttons */}

        <div className="
        mt-8
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-4
        ">


          <Link

          href="/"

          className="
          flex
          items-center
          justify-center
          gap-2
          bg-gradient-to-r
          from-violet-600
          to-violet-400
          hover:scale-105
          transition
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          "

          >

            <ArrowLeft size={18}/>

            Back Home

          </Link>





          <Link

          href="/Explore"

          className="
          flex
          items-center
          justify-center
          gap-2
          border
          border-white/30
          hover:bg-white/10
          transition
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          "

          >

            Explore AI Tools

          </Link>



        </div>





        {/* Bottom text */}

        <p className="
        mt-10
        text-sm
        text-slate-400
        ">

          Powered by Agentic AI Workspace

        </p>



      </div>


    </main>

  );
}