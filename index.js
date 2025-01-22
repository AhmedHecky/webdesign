// Launch multiple websites when the button is clicked
function launchSites() {
  const urls = [
    "https://notion.so",
    "https://classcharts.com",
    "https://teams.microsoft.com",
  ];

  urls.forEach((url) => window.open(url, "_blank"));
}
