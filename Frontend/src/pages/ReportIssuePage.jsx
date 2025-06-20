import { useState } from "react";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    urgency: "low",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/issues/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setMessage("Issue reported successfully!");
      setFormData({ title: "", description: "", urgency: "low" });
    } catch {
      setError("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-start p-6 pt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">🛠 Report an Issue</h2>

        <div>
          <label className="block font-medium mb-1">Issue Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Leaking tap"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Provide more details..."
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded resize-none"
          ></textarea>
        </div>

        <div>
          <label className="block font-medium mb-1">Urgency</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="low">Low (not urgent)</option>
            <option value="medium">Medium</option>
            <option value="high">High (urgent)</option>
          </select>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;

