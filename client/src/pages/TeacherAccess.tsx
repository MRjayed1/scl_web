import { useState } from "react";
import { useLocation } from "wouter";
import { GraduationCap, UserCheck } from "lucide-react";

export default function TeacherAccess() {
  const [teacherId, setTeacherId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, navigate] = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    if (!teacherId.trim()) {
      setError("Please enter your teacher ID to continue.");
      return;
    }

    setIsLoading(true);

    try {
      // Verify teacher ID exists in database
      const response = await fetch(`/api/teachers/verify/${teacherId.trim()}`);
      
      if (response.ok) {
        const teacher = await response.json();
        
        // Store teacher info for the portal session
        sessionStorage.setItem('currentTeacher', JSON.stringify(teacher));
        
        setSuccess(`Welcome ${teacher.firstName} ${teacher.lastName}!`);
        
        // Navigate to teacher portal after a brief delay
        setTimeout(() => {
          navigate("/teacher-portal");
        }, 1500);
      } else {
        setError("Invalid teacher ID. Please check your ID and try again.");
      }
    } catch (error) {
      setError("Unable to verify teacher ID. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const sampleIds = [
    "TCH2024001", "TCH2024002", "TCH2024003"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 dark:bg-green-500 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Teacher Portal Access</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Enter your unique teacher ID to access your portal
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Teacher Login</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Use your assigned teacher ID to access your personal dashboard
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Teacher ID
              </label>
              <input
                id="teacherId"
                type="text"
                placeholder="Enter your teacher ID (e.g., TCH2024001)"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                data-testid="input-teacher-id"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white text-center font-mono"
              />
            </div>
            
            {error && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            
            {success && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                <p className="text-sm text-green-600 dark:text-green-400">{success}</p>
              </div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              data-testid="button-access-portal"
            >
              {isLoading ? "Verifying..." : "Access Portal"}
            </button>
          </form>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-800 dark:text-green-200 mb-3">Demo Teacher IDs</h3>
          <p className="text-xs text-green-700 dark:text-green-300 mb-3">
            For testing purposes, you can use any of these teacher IDs:
          </p>
          <div className="grid grid-cols-1 gap-2 text-xs font-mono">
            {sampleIds.map((id) => (
              <button
                key={id}
                onClick={(e: React.MouseEvent) => setTeacherId(id)}
                className="p-2 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
                data-testid={`sample-id-${id}`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}