var DownloadText = "Pobierz aplikację";
    if (navigator.appVersion.indexOf("Win") != -1) DownloadText = "Pobierz dla systemu windows";
    if (navigator.appVersion.indexOf("Mac") != -1) DownloadText = "Pobierz dla systemu Mac OS";
    if (navigator.appVersion.indexOf("Linux") != -1) DownloadText = "Pobierz dla systemu Linux";
    document.getElementById("download-os").innerText = DownloadText;

    