document.getElementById('pdf-upload').addEventListener('change', handleFileUpload);
document.getElementById('download-btn').addEventListener('click', handleDownload);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // Handle the file upload and processing here
        // Enable the download button after processing
        document.getElementById('download-btn').disabled = false;
    }
}

function handleDownload() {
    // Handle the file download here
    alert('Downloading the extracted file...');
}
