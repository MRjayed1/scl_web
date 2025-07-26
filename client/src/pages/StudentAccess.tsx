import { useState } from "react";
import { useLocation } from "wouter";
import { GraduationCap, UserCheck } from "lucide-react";

export default function StudentAccess() {
  const [studentId, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, navigate] = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    if (!studentId.trim()) {
      setError("Please enter your student ID to continue.");
      return;
    }

    setIsLoading(true);

    try {
      // Verify student ID exists in database
      const response = await fetch(`/api/students/verify/${studentId.trim()}`);
      
      if (response.ok) {
        const student = await response.json();
        
        // Store student info for the portal session
        sessionStorage.setItem('currentStudent', JSON.stringify(student));
        
        setSuccess(`Welcome ${student.firstName} ${student.lastName}!`);
        
        // Navigate to student portal after a brief delay
        setTimeout(() => {
          navigate("/student-portal");
        }, 1500);
      } else {
        setError("Invalid student ID. Please check your ID and try again.");
      }
    } catch (error) {
      setError("Unable to verify student ID. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const sampleIds = [
    "STU2025001", "STU2025002", "STU2025003", "STU2025004", "STU2025005",
    "STU2025006", "STU2025007", "STU2025008", "STU2025009", "STU2025010"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Student Portal Access</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Enter your unique student ID to access your portal
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Student Login</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Use your assigned student ID to access your personal dashboard
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Student ID
              </label>
              <input
                id="studentId"
                type="text"
                placeholder="Enter your student ID (e.g., STU2025001)"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                data-testid="input-student-id"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-center font-mono"
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
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
              data-testid="button-access-portal"
            >
              {isLoading ? "Verifying..." : "Access Portal"}
            </button>
          </form>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-3">Demo Student IDs</h3>
          <p className="text-xs text-blue-700 dark:text-blue-300 mb-3">
            For testing purposes, you can use any of these student IDs:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {sampleIds.map((id) => (
              <button
                key={id}
                onClick={(e: React.MouseEvent) => setStudentId(id)}
                className="p-2 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
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