function getSlsOfflinePort() {
  return process.env.PORT || "3005";
}

module.exports = getSlsOfflinePort;