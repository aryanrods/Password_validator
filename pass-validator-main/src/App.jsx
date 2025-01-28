import React, { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = (password) => {
    // Regular expressions for validation
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (
      hasMinLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSymbol
    ) {
      setMessage("Password is strong");
    } else if (hasMinLength && hasUpperCase && hasLowerCase) {
      setMessage("Password is okay");
    } else {
      setMessage("Password is weak");
    }
    setPassword(password);
  };

  const getMessageColor = () => {
    if (message === "Password is strong") return "text-green-600";
    if (message === "Password is okay") return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Password Validator
        </h1>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          {message && (
            <p className={`text-center font-medium ${getMessageColor()}`}>
              {message}
            </p>
          )}

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>Password must contain:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>At least 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
