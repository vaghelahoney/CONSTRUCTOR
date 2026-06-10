'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import { FaRobot, FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ConstructionChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to the bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all z-50 transform hover:scale-105 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
                    }`}
                aria-label="Open Construction Assistant"
            >
                <FaCommentDots size={24} />
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 w-11/12 max-w-sm sm:max-w-md md:max-w-lg bg-gray-900 border border-gray-700 rounded-xl shadow-2xl flex flex-col z-50 transform transition-all duration-300 origin-bottom-right overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                    }`}
                style={{ height: '600px', maxHeight: '80vh' }}
            >
                {/* Header */}
                <div className="bg-blue-600 p-4 flex justify-between items-center text-white shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <FaRobot size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm sm:text-base">Expert Foreman AI</h3>
                            <p className="text-xs text-blue-100">Construction & Engineering</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                        aria-label="Close chat"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Messages Layout */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4">
                            <div className="bg-gray-800 p-4 rounded-full">
                                <FaRobot size={32} className="text-blue-500" />
                            </div>
                            <p className="text-sm">
                                Hi! I am the Expert Foreman AI.<br />
                                Ask me about construction materials, estimates, structural advice, or safety regulations.
                            </p>
                        </div>
                    ) : (
                        messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex flex-col max-w-[85%] ${message.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                                    }`}
                            >
                                <div
                                    className={`p-3 rounded-2xl text-sm leading-relaxed prose prose-invert max-w-none ${message.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none'
                                        }`}
                                >
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            table: ({ node, ...props }) => (
                                                <div className="overflow-x-auto my-2">
                                                    <table className="min-w-full text-sm divide-y divide-gray-700" {...props} />
                                                </div>
                                            ),
                                            th: ({ node, ...props }) => <th className="px-3 py-2 text-left font-semibold text-gray-300 bg-gray-700/50" {...props} />,
                                            td: ({ node, ...props }) => <td className="px-3 py-2 whitespace-nowrap border-t border-gray-700" {...props} />,
                                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 last:mb-0" {...props} />,
                                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2 last:mb-0" {...props} />,
                                            li: ({ node, ...props }) => <li className="mb-1 last:mb-0" {...props} />,
                                            strong: ({ node, ...props }) => <strong className="font-bold text-white" {...props} />,
                                            h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-white mt-4 mb-2" {...props} />,
                                        }}
                                    >
                                        {message.content}
                                    </ReactMarkdown>
                                </div>
                                <span className="text-xs text-gray-500 mt-1 px-1">
                                    {message.role === 'user' ? 'You' : 'Foreman AI'}
                                </span>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <div className="flex bg-gray-800 text-gray-300 border border-gray-700 p-3 rounded-2xl rounded-bl-none w-fit space-x-2 items-center">
                            <span className="animate-bounce h-2 w-2 bg-gray-400 rounded-full" />
                            <span className="animate-bounce delay-75 h-2 w-2 bg-gray-400 rounded-full" />
                            <span className="animate-bounce delay-150 h-2 w-2 bg-gray-400 rounded-full" />
                        </div>
                    )}
                    {error && (
                        <div className="flex bg-red-900/50 text-red-200 border border-red-700 p-3 rounded-2xl rounded-bl-none w-fit text-sm mt-2">
                            Oops! An error occurred: {error.message || 'Failed to get a response.'}
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-gray-800 border-t border-gray-700 shrink-0">
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            value={input}
                            onChange={handleInputChange}
                            disabled={isLoading}
                            placeholder="Ask a construction question..."
                            className="flex-1 bg-gray-900 border border-gray-700 text-gray-200 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
                            aria-label="Send Message"
                        >
                            <FaPaperPlane size={16} className={isLoading ? 'animate-pulse' : ''} />
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-500">AI responses may occasionally be inaccurate. Consult professionals.</span>
                    </div>
                </div>
            </div>
        </>
    );
}
