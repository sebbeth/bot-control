export function getSocketConnection(hostname: string) {
  const ws = new WebSocket(`ws://${hostname}:80`);
  return ws;
}
