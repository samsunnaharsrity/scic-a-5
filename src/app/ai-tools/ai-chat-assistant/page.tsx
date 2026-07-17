"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function AIChatAssistant() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);




  const router = useRouter();

  const { data: session, isPending } = useSession();



  useEffect(() => {

    if(!isPending && !session){
      router.replace("/login");
    }

  }, [session, isPending, router]);



  if(isPending){
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }



  if(!session){
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Redirecting...
      </div>
    );
  }

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ai/chat`,
        {
          message,
        }
      );

      setResponse(data.reply);
      setMessage("");

    } catch (error) {
      console.error(error);
      setResponse("Something went wrong. Please try again.");

    } finally {
      setLoading(false);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };


  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white flex items-center justify-center py-6">

      <div className="w-full max-w-3xl">


        {/* Header */}
        <div className="text-center mb-10">

          <div className="mx-auto w-20 h-20 rounded-full bg-violet-600/20 flex items-center justify-center mb-5 border border-violet-500">

            <Bot size={40} className="text-violet-400"/>

          </div>


          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-violet-600 text-transparent bg-clip-text">
            AI Chat Assistant
          </h1>


          <p className="text-slate-400 mt-3">
            Ask anything and get instant AI powered answers
          </p>

        </div>




        {/* Chat Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">


          {/* User Message */}

          {message && (
            <div className="flex justify-end mb-5">

              <div className="bg-violet-600 px-5 py-3 rounded-2xl max-w-[80%] flex gap-3 items-start">

                <User size={20}/>

                <p>
                  {message}
                </p>

              </div>

            </div>
          )}



          {/* AI Response */}

          {response && (

            <div className="flex justify-start mb-5">


              <div className="bg-slate-800 px-5 py-4 rounded-2xl max-w-[80%] flex gap-3 items-start">


                <Bot 
                  size={22}
                  className="text-violet-400 mt-1"
                />


                <p className="leading-relaxed">
                  {response}
                </p>


              </div>


            </div>

          )}



          {/* Input */}

          <div className="mt-6">


            <textarea

              rows={4}

              className="
              w-full
              bg-slate-900/70
              border
              border-white/20
              rounded-2xl
              p-4
              outline-none
              resize-none
              focus:border-violet-500
              transition
              "

              placeholder="Ask AI anything..."

              value={message}

              onChange={(e)=>setMessage(e.target.value)}

              onKeyDown={handleKeyDown}

            />



            <button

              onClick={sendMessage}

              disabled={loading}

              className="
              mt-4
              w-full
              bg-gradient-to-r
              from-violet-800
              to-purple-950
              hover:scale-[1.02]
              transition
              rounded-2xl
              py-4
              font-semibold
              flex
              items-center
              justify-center
              gap-2
              disabled:opacity-50
              "

            >

              {
                loading 
                ?
                <>
                  <Loader2 className="animate-spin"/>
                  Thinking...
                </>
                :
                <>
                  <Send size={20}/>
                  Send Message
                </>
              }


            </button>


          </div>


        </div>


      </div>


    </section>
  );
}