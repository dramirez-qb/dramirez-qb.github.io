function FindProxyForURL (url, host) {
  if (shExpMatch(host, "*.cu")) {
    return "DIRECT";
  }

  if (shExpMatch(host, "secure.etecsa.net")) {
    return "DIRECT";
  }

  if (isInNet(host, "10.42.0.0", "255.255.255.0")) {
    return "DIRECT";
  }

  if (isInNet(host, "192.168.0.0", "255.255.0.0")) {
    return "DIRECT";
  }

  return "SOCKS5 127.0.0.1:9050; PROXY 127.0.0.1:9080; SOCKS5 192.168.50.220:9100; DIRECT";
}
