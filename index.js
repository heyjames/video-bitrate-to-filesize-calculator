// Find the highest video bitrate given a target file size limit

// Change these values
const videoSeconds = 24; // Length of video in seconds
const dataLimitMegaBytes = 10; // File size limit (Discord: 8, Steam: 10)
const audioKiloBits = 128;
const safeTrimKiloBits = 1;

// Don't change
const hostLimitKilobits = dataLimitMegaBytes * 8000;
const audioTotalKiloBits = audioKiloBits * videoSeconds;
const theoreticalVideoBitrate = (hostLimitKilobits - audioTotalKiloBits) / videoSeconds

console.log("theoreticalVideoBitrate:", Math.round(theoreticalVideoBitrate) + " kbps");
const practicalVideoBitrateSafe = theoreticalVideoBitrate - safeTrimKiloBits;
console.log("practicalVideoBitrate:", Math.round(practicalVideoBitrateSafe) + " kbps");

// Reverse calculation using safe bitrate to get final file size
const finalFileSize = ((practicalVideoBitrateSafe + audioKiloBits) * videoSeconds) / 8000;
console.log("finalSize (+safe):", finalFileSize + " MB");
console.log("finalSizeBits (+safe):", Math.round(finalFileSize * 1039165).toLocaleString() + " bytes");
