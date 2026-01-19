'use client';

export default function CertificationPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Certification</h1>
      <p className="text-gray-600">View your earned certifications</p>
      
      <div className="mt-8 bg-white rounded-lg p-12 border border-gray-200 text-center">
        <p className="text-gray-500">No certifications earned yet</p>
      </div>
    </div>
  );
}
