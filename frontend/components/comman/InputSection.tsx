"use client";

import { useState } from "react";
import { Plus, Shuffle, Clock, ChevronDown, ArrowUp } from "lucide-react";

export default function InputSection() {
  const [input, setInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className=" w-2xl flex items-center justify-center  font-inter">
      <div className="w-full max-w-4xl">
        <div className=" backdrop-blur-3xl bg-black/30 rounded-[5px] border border-[#2E2E2E]">
          {/* Input Area */}
          <div className="p-6">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="How can I help you today?"
              className="w-full bg-transparent text-neutral-100 placeholder-neutral-500 text-[14px] resize-none outline-none "
              rows={2}
            />
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between px-6 pb-6">
            {/* Left Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
                <Plus className="w-3 h-3 text-neutral-300" />
              </button>
              <button className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
                <Shuffle className="w-3 h-3 text-neutral-300" />
              </button>
              <button className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-colors">
                <Clock className="w-3 h-3 text-neutral-300" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Model Selector */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 text-neutral-300 hover:text-neutral-100 transition-colors relative"
              >
                <span className="text-sm font-medium">Sonnet 4.5</span>
                <ChevronDown className="w-4 h-4" />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute bottom-full right-0 w-48 bg-neutral-700 rounded-lg shadow-xl border border-neutral-600 py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-600 transition-colors">
                      Sonnet 4.5
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-600 transition-colors">
                      Opus 4.1
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-600 transition-colors">
                      Haiku 4.5
                    </button>
                  </div>
                )}
              </button>

              {/* Send Button */}
              <button className="p-2 bg-orange-700 hover:bg-orange-700 rounded-lg transition-colors">
                <ArrowUp className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
