"use client"

import { useState } from "react"

export default function TestEmailPage() {
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const testEmail = async () => {
    setLoading(true)
    setStatus("")
    
    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()
      
      if (result.success) {
        setStatus("✅ Test email sent! Check your inbox.")
        console.log("Test email result:", result)
      } else {
        setStatus(`❌ Error: ${result.error}`)
        console.error("Test email failed:", result)
      }
    } catch (error) {
      setStatus(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      console.error("Network error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">🧪 Email Test</h1>
        
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="font-semibold text-blue-900 mb-2">📧 Gmail Setup Required:</h2>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Go to: <a href="https://myaccount.google.com/apppasswords" target="_blank" className="underline">Google App Passwords</a></li>
            <li>Select "Mail" on your computer</li>
            <li>Generate new app password</li>
            <li>Copy the 16-character password</li>
            <li>Add to .env.local: EMAIL_PASSWORD=your-app-password</li>
          </ol>
        </div>

        <button
          onClick={testEmail}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "🔄 Testing..." : "🧪 Send Test Email"}
        </button>

        {status && (
          <div className="mt-4 p-3 rounded-lg text-sm">
            {status}
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500">
          <p>Check browser console (F12) for detailed logs</p>
          <p>Check spam folder if email doesn't arrive</p>
        </div>
      </div>
    </div>
  )
}
