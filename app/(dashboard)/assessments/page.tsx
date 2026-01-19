'use client';

import { ChevronLeft, AlertCircle } from 'lucide-react';

export default function AssessmentsPage() {
  const quiz = [
    {
      id: 1,
      question: 'What is the purpose of React Hooks?',
      type: 'Multiple Choice',
      points: 4,
      options: [
        'A. To use state and other React features in functional components',
        'B. To create class components',
        'C. To style React components',
        'D. To handle routing in React applications',
      ],
    },
    {
      id: 2,
      question: 'Which hook is used for side effects in React?',
      type: 'Multiple Choice',
      points: 4,
      options: [
        'A. To use state and other React features in functional components',
        'B. To create class components',
        'C. To style React components',
        'D. To handle routing in React applications',
      ],
    },
    {
      id: 3,
      question: 'Explain the Virtual DOM and its benefits',
      type: 'Short answer',
      points: 10,
      options: [],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Effective Workplace Communication</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-gray-200">
        <button className="py-3 font-medium text-gray-600 border-b-2 border-transparent">
          Course Content
        </button>
        <button className="py-3 font-medium text-gray-600 border-b-2 border-blue-600 text-blue-600">
          Review/Feedbacks
        </button>
      </div>

      {/* Quiz */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Quiz</h2>

        <div className="space-y-8">
          {quiz.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-8 last:border-b-0">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold text-sm">
                  {item.id}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.question}</p>
                  <div className="flex gap-4 mt-2 text-xs">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-gray-600">{item.points} points</span>
                  </div>
                </div>
              </div>

              {item.type === 'Multiple Choice' ? (
                <div className="space-y-2 ml-11">
                  {item.options.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="radio" name={`question-${item.id}`} className="w-4 h-4" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="ml-11">
                  <textarea
                    placeholder="Enter answer here"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    rows={4}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
