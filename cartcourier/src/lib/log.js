async function saveLog(className, functionName, error) {
	try {
		const response = await fetch("/api/logs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				Classname: className,
				Functionname: functionName,
				Error: error,
			}),
		});

		if (response.ok) {
			const data = await response.json();
			console.log("Log added successfully:", data);
			return data;
		} else {
			console.error("Failed to add log:", response.statusText);
			return null;
		}
	} catch (error) {
		console.error("Error adding log:", error);

		return null;
	}
}

export { saveLog };