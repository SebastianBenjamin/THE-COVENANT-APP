call();
function call() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            const date = new Date();
            const startOfYear = new Date(date.getFullYear(), 0, 1);
            const dayOfYear = Math.ceil((date - startOfYear) / (1000 * 60 * 60 * 24)); // Calculate the day of the year

            // Find the verse for the current day
            const verseOfDay = data.find(item => item.day === dayOfYear);

            if (verseOfDay) {
               
                const output = JSON.stringify(verseOfDay, null, 2); // Pretty-print JSON
                document.getElementsByTagName('pre')[0].textContent = output;
            } else {
                document.getElementsByTagName('pre')[0].textContent = "No verse found for today.";
            }
        } else {
            document.getElementsByTagName('pre')[0].textContent = "Error loading JSON data.";
        }
    }

    xhttp.open("GET", "https://raw.githubusercontent.com/SebastianBenjamin/App.TheCovenant/main/verseoftheday.json");
    xhttp.send();
}
